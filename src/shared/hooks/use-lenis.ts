import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import { useEffect, useRef } from "react"

export function useLenis() {
	// Register plugin on client side only
	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger)
	}
	const lenisRef = useRef<Lenis | null>(null)

	useEffect(() => {
		// Initialize Lenis
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
			infinite: false,
		})

		lenisRef.current = lenis

		// Sync Lenis with GSAP ScrollTrigger
		lenis.on("scroll", ScrollTrigger.update)

		// Animation frame loop
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		// Cleanup
		return () => {
			lenis.destroy()
		}
	}, [])

	useGSAP(() => {
		// Update ScrollTrigger to use Lenis scroller
		ScrollTrigger.scrollerProxy(document.body, {
			scrollTop(value) {
				if (lenisRef.current) {
					if (arguments.length && value !== undefined) {
						lenisRef.current.scrollTo(value, { immediate: true })
					}
					return lenisRef.current.scroll ?? 0
				}
				return 0
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				}
			},
		})
	})

	return lenisRef.current
}
