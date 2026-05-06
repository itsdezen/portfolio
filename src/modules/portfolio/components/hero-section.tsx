"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import { cn } from "~/shared/utils"
import { portfolioData } from "../portfolio-data"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function HeroSection() {
	const sectionRef = useRef<HTMLElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
	const [mounted, setMounted] = useState(false)

	// Single state update instead of 7 - prevents multiple re-renders
	useEffect(() => {
		const timer = setTimeout(() => setMounted(true), 100)
		return () => clearTimeout(timer)
	}, [])

	// 3D scroll animation with pin + fade + darken - OPTIMIZED for 60fps
	useGSAP(
		() => {
			if (!sectionRef.current || !contentRef.current) return

			// Force GPU acceleration on elements
			gsap.set(contentRef.current, {
				force3D: true,
				willChange: "transform, opacity",
			})
			gsap.set(sectionRef.current, {
				force3D: true,
				willChange: "opacity",
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "+=150%",
					scrub: 1, // Smooth scrub with 1s delay
					pin: true,
					pinSpacing: false,
					anticipatePin: 1,
					invalidateOnRefresh: true,
					// markers: true,
				},
			})

			// Animate content rotation + fade
			tl.fromTo(
				contentRef.current,
				{
					rotateX: 0,
					rotateY: 0,
					rotateZ: 0,
					scale: 1,
					x: 0,
					y: 0,
					z: 0,
					opacity: 1,
				},
				{
					rotateX: 45,
					rotateY: 45,
					rotateZ: 0,
					scale: 1.5,
					x: "30%",
					y: "-30%",
					z: 0,
					opacity: 0,
					ease: "none",
				},
				0,
			)
			// Darken section with overlay (smooth fade to black)
			tl.fromTo(
				sectionRef.current,
				{
					"--darken-opacity": 0,
				},
				{
					"--darken-opacity": 1,
					ease: "none",
				},
				0,
			)
		},
		{ scope: sectionRef },
	)

	return (
		<section
			ref={sectionRef}
			id="home"
			className="relative min-h-screen w-full overflow-hidden bg-bg"
			style={
				{ perspective: "1500px", "--darken-opacity": 0 } as React.CSSProperties
			}
		>
			{/* Dark overlay - fades in on scroll */}
			<div
				className="pointer-events-none absolute inset-0 z-20 bg-black"
				style={{ opacity: "var(--darken-opacity, 0)" }}
			/>

			{/* Noise texture overlay */}
			<div
				className="pointer-events-none absolute inset-0 z-10 opacity-50"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Glow effects - Static only, reduced opacity */}
			<div
				className="pointer-events-none absolute -top-[200px] -right-[100px] h-[600px] w-[800px]"
				style={{
					background:
						"radial-gradient(ellipse at center, oklch(0.68 0.20 85 / 0.04) 0%, transparent 65%)",
				}}
			/>
			<div
				className="pointer-events-none absolute -bottom-[120px] left-[40px] h-[400px] w-[500px]"
				style={{
					background:
						"radial-gradient(ellipse at center, oklch(0.68 0.20 85 / 0.02) 0%, transparent 70%)",
				}}
			/>

			{/* Grid background - reduced opacity */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
					maskImage:
						"radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
					WebkitMaskImage:
						"radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
				}}
			/>

			{/* Border frame - reduced opacity */}
			<div className="pointer-events-none absolute inset-6 top-[52px] rounded-2xl border border-white/3" />

			{/* Corner accents - reduced opacity */}
			<div className="pointer-events-none absolute top-[76px] left-10 z-20 h-4 w-4 border-white/8 border-t-[1.5px] border-l-[1.5px] lg:left-12" />
			<div className="pointer-events-none absolute top-[76px] right-10 z-20 h-4 w-4 border-white/8 border-t-[1.5px] border-r-[1.5px] lg:right-12" />
			<div className="pointer-events-none absolute bottom-10 left-10 z-20 h-4 w-4 border-white/8 border-b-[1.5px] border-l-[1.5px] lg:bottom-12 lg:left-12" />
			<div className="pointer-events-none absolute right-10 bottom-10 z-20 h-4 w-4 border-white/8 border-r-[1.5px] border-b-[1.5px] lg:right-12 lg:bottom-12" />

			{/* Large monogram background - reduced opacity */}
			<div
				className="pointer-events-none absolute right-[72px] bottom-[60px] z-[1] select-none font-bold font-sans text-[200px] text-white/1 tracking-[-0.06em]"
				aria-hidden="true"
			>
				{portfolioData.name.charAt(0)}
			</div>

			{/* Main content */}
			<div
				ref={contentRef}
				className="relative z-[5] grid h-full min-h-screen grid-cols-1 gap-6 px-10 pt-[112px] pb-[60px] lg:grid-cols-[1fr_340px] lg:px-[72px]"
				style={{ transformStyle: "preserve-3d" }}
			>
				{/* Left section */}
				<div className="flex flex-col justify-between">
					<div>
						{/* Meta row */}
						<div
							className={cn(
								"mb-10 flex flex-wrap items-center gap-2.5 transition-all duration-700",
								mounted
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0",
							)}
							style={{ transitionDelay: "100ms" }}
						>
							<div className="h-[7px] w-[7px] flex-shrink-0 animate-pulse rounded-full bg-[#30d158]" />
							<span className="font-mono text-white/25 text-xs tracking-[0.04em]">
								{portfolioData.availability.status}
							</span>
							<span className="font-mono text-white/10 text-xs">·</span>
							<span className="font-mono text-white/25 text-xs tracking-[0.04em]">
								{portfolioData.location} · {portfolioData.timezone}
							</span>
						</div>

						{/* Gold divider */}
						<div
							className={cn(
								"mb-8 h-[2px] rounded-sm bg-primary transition-all duration-700",
								mounted ? "w-12 opacity-100" : "w-0 opacity-0",
							)}
							style={{ transitionDelay: "250ms" }}
						/>

						{/* Name */}
						<div
							className={cn(
								"mb-4 max-w-fit transition-all duration-700",
								mounted
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0",
							)}
							style={{ transitionDelay: "400ms" }}
						>
							<h1 className="max-w-fit font-sans font-semibold text-5xl text-white md:text-6xl lg:text-[80px]">
								{portfolioData.name.split(" ")[0]}
								<br />
								<em className="font-semibold text-primary not-italic">
									{portfolioData.name.split(" ").slice(1).join(" ")}.
								</em>
							</h1>
							<div className="mt-4 text-right">
								<span className="font-mono text-base text-white/35">
									aka {portfolioData.website.domain}
								</span>
							</div>
						</div>

						{/* Title */}
						<p
							className={cn(
								"mb-6 max-w-[460px] font-sans text-white/35 text-xl leading-[1.4] tracking-[-0.015em] transition-all duration-700 md:text-[22px]",
								mounted
									? "translate-y-0 opacity-100"
									: "translate-y-4 opacity-0",
							)}
							style={{ transitionDelay: "550ms" }}
						>
							{portfolioData.title}
							<br />
							{portfolioData.specialties.join(" · ")}
						</p>
					</div>

					{/* Stats */}
					<div
						className={cn(
							"flex overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
						)}
						style={{ transitionDelay: "700ms" }}
					>
						{portfolioData.stats.map((stat, index) => (
							<div
								key={index}
								className={cn(
									"flex-1 border-white/[0.07] border-r px-4 py-5 md:px-6",
									index === portfolioData.stats.length - 1 && "border-r-0",
								)}
							>
								<div className="mb-1 font-sans font-semibold text-2xl text-white tabular-nums tracking-[-0.025em] md:text-[32px]">
									{stat.value}
									<span className="text-primary">{stat.suffix}</span>
								</div>
								<div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.04em]">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Divider */}
				<div className="mx-0 my-4 h-px w-full bg-white/[0.07] lg:mx-[72px] lg:my-0 lg:h-auto lg:w-px" />

				{/* Right section */}
				<div className="flex flex-col justify-between gap-10">
					<div
						className={cn(
							"transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
						)}
						style={{ transitionDelay: "850ms" }}
					>
						{/* Stack label */}
						<div className="mb-4 font-mono text-[10px] text-white/15 uppercase tracking-[0.09em]">
							Core Stack
						</div>

						{/* Stack chips */}
						<div className="flex flex-wrap gap-2">
							{portfolioData.coreStack.flat().map((tech, techIndex) => (
								<span
									key={techIndex}
									className={cn(
										"rounded-md border border-white/6 bg-white/2 px-3 py-1.25 font-mono text-white/45 text-xs tracking-[0.01em]",
										"highlight" in tech &&
											tech.highlight === "gold" &&
											"border-primary/20 bg-primary/5 text-primary",
										"highlight" in tech &&
											tech.highlight === "hi" &&
											"border-white/12 bg-white/4 text-white/75",
									)}
								>
									{tech.name}
								</span>
							))}
						</div>
					</div>

					{/* URL badge */}
					<div
						className={cn(
							"flex items-center gap-2.5 rounded-[10px] border border-primary/20 bg-primary/[0.05] px-[18px] py-[14px] transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
						)}
						style={{ transitionDelay: "1000ms" }}
					>
						<div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
							<svg
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								className="block"
							>
								<path
									d="M2 8L8 2M8 2H4M8 2V6"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-bg"
								/>
							</svg>
						</div>
						<span className="font-mono text-sm text-white/55 tracking-[0.02em]">
							<strong className="font-normal text-primary">
								{portfolioData.website.domain}
							</strong>
							{portfolioData.website.extension}
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
