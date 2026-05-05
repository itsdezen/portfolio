"use client"

import { useEffect, useState } from "react"
import { useParallax } from "~/shared/hooks"
import { cn } from "~/shared/utils"

interface HeroSectionNewProps {
	status: string
	location: string
	headline: string
	tagline: string
}

export function HeroSectionNew({
	status,
	location,
	headline,
	tagline,
}: HeroSectionNewProps) {
	const [mounted, setMounted] = useState({
		status: false,
		headline: false,
		tagline: false,
		ctas: false,
	})

	const parallax = useParallax(0.35)

	useEffect(() => {
		const timers = [
			setTimeout(() => setMounted((m) => ({ ...m, status: true })), 180),
			setTimeout(() => setMounted((m) => ({ ...m, headline: true })), 360),
			setTimeout(() => setMounted((m) => ({ ...m, tagline: true })), 520),
			setTimeout(() => setMounted((m) => ({ ...m, ctas: true })), 680),
		]

		return () => timers.forEach(clearTimeout)
	}, [])

	return (
		<section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-black px-6 pt-[52px] pb-24 text-center">
			{/* Avatar background - below everything */}
			<div
				className="pointer-events-none absolute inset-0 z-0"
				style={{
					transform: `translateY(${parallax.y * 0.5}px) scale(${1 + parallax.scale * 0.05})`,
					opacity: parallax.opacity * 0.15,
					willChange: "transform",
				}}
			>
				<div
					className="absolute inset-0 bg-center bg-cover bg-no-repeat"
					style={{
						backgroundImage: "url(/avatar.jpeg)",
						filter: "blur(40px)",
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
			</div>

			{/* Radial gradient glow - primary theme */}
			<div
				className="pointer-events-none absolute inset-0 z-[1]"
				style={{
					background:
						"radial-gradient(ellipse 90% 55% at 50% -5%, oklch(0.68 0.20 85 / 0.12) 0%, transparent 68%)",
					transform: `translateY(${parallax.y}px) scale(${parallax.scale})`,
					opacity: parallax.opacity,
					willChange: "transform",
				}}
			/>

			{/* Dot pattern overlay */}
			<div
				className="pointer-events-none absolute inset-0 z-[2]"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
					backgroundSize: "32px 32px",
					maskImage:
						"radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 80%)",
					WebkitMaskImage:
						"radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 80%)",
				}}
			/>

			{/* Content */}
			<div className="relative z-10">
				{/* Status badge */}
				<div
					className={cn(
						"mb-9 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-white/55 transition-all duration-600",
						mounted.status
							? "translate-y-0 opacity-100"
							: "translate-y-3.5 opacity-0",
					)}
				>
					<span className="h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-[#30d158]" />
					{status} · {location}
				</div>

				{/* Headline */}
				<h1
					className={cn(
						"mx-auto mb-7 max-w-[860px] whitespace-pre-line font-display font-semibold text-[clamp(56px,9vw,104px)] text-white leading-[1.01] tracking-[-0.035em] transition-all duration-700",
						mounted.headline
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.15s" }}
				>
					{headline}
				</h1>

				{/* Tagline */}
				<p
					className={cn(
						"mx-auto mb-12 max-w-[520px] text-[clamp(17px,2vw,22px)] text-muted-fg leading-[1.45] transition-all duration-700",
						mounted.tagline
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.3s", textWrap: "pretty" }}
				>
					{tagline}
				</p>

				{/* CTAs */}
				<div
					className={cn(
						"flex flex-wrap justify-center gap-3 transition-all duration-700",
						mounted.ctas
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.45s" }}
				>
					<a
						href="#projects"
						className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-[15px] text-primary-fg transition-all hover:scale-[1.025] hover:brightness-110 active:scale-[0.975]"
					>
						View Work
					</a>
					<a
						href="mailto:onepercman@gmail.com"
						className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.13] bg-white/[0.08] px-6 py-3 text-[15px] text-white transition-all hover:scale-[1.025] hover:bg-white/[0.13] active:scale-[0.975]"
					>
						Get in Touch
					</a>
				</div>
			</div>

			{/* Scroll hint */}
			<div
				className="fade-in absolute bottom-9 left-1/2 flex -translate-x-1/2 animate-in flex-col items-center gap-2"
				style={{ animationDelay: "1.4s", animationDuration: "0.8s" }}
			>
				<span className="font-mono text-[10px] text-white/22 uppercase tracking-[0.1em]">
					Scroll
				</span>
				<div
					className="h-11 w-px animate-pulse bg-gradient-to-b from-white/25 to-transparent"
					style={{
						animation: "scrollSlide 2.2s ease-in-out 1.8s infinite",
					}}
				/>
			</div>
		</section>
	)
}
