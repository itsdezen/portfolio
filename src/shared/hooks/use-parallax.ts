"use client"

import { useEffect, useState } from "react"

export function useParallax(speed = 0.35) {
	const [offset, setOffset] = useState({ y: 0, opacity: 1, scale: 1 })

	useEffect(() => {
		let ticking = false

		const handleScroll = () => {
			if (ticking) return
			ticking = true

			requestAnimationFrame(() => {
				const scrollY = window.scrollY
				const heroHeight = window.innerHeight

				if (scrollY < heroHeight) {
					const pct = scrollY / heroHeight
					setOffset({
						y: scrollY * speed,
						opacity: 1 - pct * 1.4,
						scale: 1 + pct * 0.15,
					})
				}

				ticking = false
			})
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [speed])

	return offset
}
