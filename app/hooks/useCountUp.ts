// hooks/useCountUp.ts
import { useEffect, useState } from "react"

export const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(10000)

  useEffect(() => {
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percent = Math.min(progress / duration, 1)
      setCount(Math.floor(percent * target))
      if (percent < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration])

  return count
}
