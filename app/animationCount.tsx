// components/AnimatedCounter.tsx
"use client"

import { useCountUp } from "./hooks/useCountUp"

export default function AnimatedCounter({ target }: { target: number }) {
  const count = useCountUp(target, 1500)

  return (
    <div className="text-center text-white py-10">
      <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest">
        Profile Views
      </p>
      <h1 className="text-6xl font-bold transition-all duration-500 ease-out">
        {count.toLocaleString()}
      </h1>
    </div>
  )
}
