"use client"

import { useEffect, useState } from "react"

export function NavigationNew() {
	const [scrollProgress, setScrollProgress] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			// Calculate scroll progress (0 to 1) based on viewport height
			const scrollY = window.scrollY
			const viewportHeight = window.innerHeight
			const progress = Math.min(scrollY / viewportHeight, 1)
			setScrollProgress(progress)
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		handleScroll() // Initial call
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const bgOpacity = scrollProgress * 0.72 // 0 to 0.72
	const borderOpacity = scrollProgress * 0.1 // 0 to 0.1
	const blurAmount = scrollProgress * 20 // 0px to 20px

	return (
		<nav
			className="fixed inset-x-0 top-0 z-[200] flex h-[52px] items-center justify-between px-12 transition-all duration-200"
			style={{
				backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
				borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
				backdropFilter: `blur(${blurAmount}px) saturate(${100 + scrollProgress * 80}%)`,
				WebkitBackdropFilter: `blur(${blurAmount}px) saturate(${100 + scrollProgress * 80}%)`,
			}}
		>
			<a
				href="#"
				className="font-display font-semibold text-sm text-white tracking-tight"
			>
				onepercman
			</a>

			<ul className="hidden gap-9 md:flex">
				<li>
					<a
						href="#about"
						className="text-[13px] text-white/78 transition-colors hover:text-white"
					>
						About
					</a>
				</li>
				<li>
					<a
						href="#projects"
						className="text-[13px] text-white/78 transition-colors hover:text-white"
					>
						Work
					</a>
				</li>
				<li>
					<a
						href="#skills"
						className="text-[13px] text-white/78 transition-colors hover:text-white"
					>
						Stack
					</a>
				</li>
				<li>
					<a
						href="#experience"
						className="text-[13px] text-white/78 transition-colors hover:text-white"
					>
						Experience
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className="text-[13px] text-primary transition-colors hover:text-primary/80"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	)
}
