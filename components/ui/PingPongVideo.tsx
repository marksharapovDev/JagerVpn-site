'use client'

interface PingPongVideoProps {
  className?: string
}

export default function PingPongVideo({ className }: PingPongVideoProps) {
  return (
    <div className={className}>
      <video
        src="/hero-model-loop.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-auto block"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  )
}