'use client'

import { useEffect, useRef } from 'react'

interface PingPongVideoProps {
  src: string
  className?: string
}

// VIDEO: place hero-model.webm in /public/hero-model.webm
// WebM must be encoded as VP9 with alpha channel (yuva420p).
// FFmpeg command: ffmpeg -i input.mov -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 0 -crf 30 output.webm

export default function PingPongVideo({ src, className }: PingPongVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    // alpha:true ensures transparent pixels stay transparent
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const frames: ImageBitmap[] = []
    let rafId: number

    const FPS = 24 // frames captured per second — lower = less memory, still smooth
    const MS_PER_FRAME = 1000 / FPS

    async function load() {
      const video = document.createElement('video')
      video.src = src
      video.muted = true
      video.playsInline = true
      video.preload = 'auto'

      await new Promise<void>((resolve, reject) => {
        video.addEventListener('loadedmetadata', () => resolve(), { once: true })
        video.addEventListener('error', () => reject(new Error('Video failed to load')), { once: true })
        video.load()
      })

      const { videoWidth: w, videoHeight: h, duration } = video
      canvas.width = w
      canvas.height = h

      const total = Math.round(duration * FPS)

      // Offscreen canvas to draw each frame — canvas pipeline preserves alpha
      const tmp = document.createElement('canvas')
      tmp.width = w
      tmp.height = h
      const tmpCtx = tmp.getContext('2d', { alpha: true })!

      for (let i = 0; i <= total; i++) {
        video.currentTime = (i / total) * duration
        await new Promise<void>(res =>
          video.addEventListener('seeked', () => res(), { once: true })
        )
        tmpCtx.clearRect(0, 0, w, h)
        tmpCtx.drawImage(video, 0, 0)
        // ImageBitmap is GPU-resident — drawImage is fast, no seeking during animation
        frames.push(await createImageBitmap(tmp))
      }

      // Ping-pong loop through pre-extracted frames — zero seeking, zero decoding
      let idx = 0
      let dir: 1 | -1 = 1
      let last = 0

      const tick = (now: number) => {
        if (now - last >= MS_PER_FRAME) {
          last = now
          ctx.clearRect(0, 0, w, h)
          ctx.drawImage(frames[idx], 0, 0)
          idx += dir
          if (idx >= frames.length - 1) dir = -1
          if (idx <= 0) dir = 1
        }
        rafId = requestAnimationFrame(tick)
      }

      rafId = requestAnimationFrame(tick)
    }

    load().catch(console.error)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      frames.forEach(f => f.close()) // free GPU memory
    }
  }, [src])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ pointerEvents: 'none' }}
    />
  )
}
