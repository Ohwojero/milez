'use client'

import { useEffect, useRef, useState } from 'react'

interface IntersectionOptions extends IntersectionObserverInit {
  triggerOnce?: boolean
}

export const useInView = (
  options: IntersectionOptions = {}
): { ref: React.RefObject<HTMLDivElement>; inView: boolean } => {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const { triggerOnce = false, ...intersectionOptions } = options

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (triggerOnce && ref.current) {
          observer.unobserve(ref.current)
        }
      } else if (!triggerOnce) {
        setInView(false)
      }
    }, intersectionOptions)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [intersectionOptions, triggerOnce])

  return { ref, inView }
}
