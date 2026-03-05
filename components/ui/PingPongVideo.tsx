'use client'

import { useRef } from 'react'

interface PingPongVideoProps {
  src: string
  className?: string
}

export default function PingPongVideo({ src, className }: PingPongVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className={`relative ${className ?? ''}`}>
      <style>{`
        .pingpong-video {
          animation: pingpong 3s ease-in-out infinite alternate;
          transition: opacity 0.4s ease;
        }
        @keyframes pingpong {
          0% { transform: perspective(800px) rotateY(-18deg); }
          100% { transform: perspective(800px) rotateY(18deg); }
        }
      `}</style>
      <video
        ref={videoRef}
        className="pingpong-video w-full h-auto"
        src={src}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        style={{ pointerEvents: 'none', opacity: 0 }}
        onLoadStart={() => {
          if (videoRef.current) videoRef.current.style.opacity = '0'
        }}
        onCanPlay={() => {
          if (videoRef.current) videoRef.current.style.opacity = '1'
        }}
      />
    </div>
  )
}
