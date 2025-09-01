import { useEffect, useRef, useState } from "react"

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
    const [isIntersecting, SetIsIntersecting] = useState(false)

    const targetRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const obserevr = new IntersectionObserver(([entry]) => {
            SetIsIntersecting(entry.isIntersecting)
        }, options)

        if (targetRef.current) {
            obserevr.observe(targetRef.current)
        }

        return () => obserevr.disconnect()
    }, [options])

    return { targetRef, isIntersecting }
}