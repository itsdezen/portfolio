"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useScrollReveal } from "~/shared/hooks"
import { cn } from "~/shared/utils"
import type { Project } from "../portfolio-types"

gsap.registerPlugin(ScrollTrigger)

interface ProjectsSectionProps {
	projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
	const intro = useScrollReveal()
	const heading = useScrollReveal()

	// Filter out OSS projects (ids 11-14)
	const mainProjects = projects.filter(
		(p) => !["11", "12", "13", "14"].includes(p.id),
	)

	return (
		<section id="projects" className="scroll-mt-[52px] bg-black">
			{/* Intro */}
			<div className="px-6 pt-32 pb-18">
				<div className="mx-auto max-w-[980px]">
					<p
						ref={intro.ref}
						className={cn(
							"mb-6 font-mono text-[11px] text-white/30 uppercase tracking-[0.09em] transition-all duration-700",
							intro.isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-7 opacity-0",
						)}
					>
						Selected Work
					</p>
					<h2
						ref={heading.ref}
						className={cn(
							"max-w-[580px] whitespace-pre-line font-display font-semibold text-[clamp(38px,5.5vw,68px)] text-white leading-[1.04] tracking-[-0.028em] transition-all duration-700",
							heading.isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-7 opacity-0",
						)}
						style={{ transitionDelay: "0.1s" }}
					>
						Products shipped.
						<br />
						Real stakes.
					</h2>
				</div>
			</div>

			{/* Project bands */}
			{mainProjects.map((project, index) => (
				<ProjectBand
					key={project.id}
					project={project}
					index={index + 1}
					variant={index % 2 === 0 ? "dark" : "graphite"}
				/>
			))}
		</section>
	)
}

function ProjectBand({
	project,
	index,
	variant,
}: {
	project: Project
	index: number
	variant: "dark" | "graphite"
}) {
	const reveal = useScrollReveal()
	const overlayRef = useRef<HTMLDivElement>(null)
	const imageRef = useRef<HTMLImageElement>(null)

	useGSAP(() => {
		if (!imageRef.current) return

		gsap.to(imageRef.current, {
			opacity: 1,
			ease: "none",
			scrollTrigger: {
				trigger: imageRef.current,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
				onUpdate: (self) => {
					// Calculate distance from center of viewport
					// progress: 0 (top of viewport) → 0.5 (center) → 1 (bottom)
					const progress = self.progress
					const centerDistance = Math.abs(progress - 0.5) * 2 // 0 at center, 1 at edges
					const opacity = 1 - centerDistance * 0.9 // 1 at center, 0.1 at edges
					const overlayOpacity = 0.32 + (1 - centerDistance) * 0.42

					gsap.set(imageRef.current, { opacity })
					if (overlayRef.current) {
						gsap.set(overlayRef.current, { opacity: overlayOpacity })
					}
				},
			},
		})
	}, [])

	return (
		<div
			className={cn(
				"group relative overflow-hidden border-white/[0.07] border-t px-6 py-20",
				variant === "dark" ? "bg-black" : "bg-[#1c1c1e]",
			)}
		>
			<img
				ref={imageRef}
				src={project.image}
				alt=""
				className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-10 md:left-auto md:w-1/3 md:brightness-75"
			/>
			<div
				ref={overlayRef}
				className="pointer-events-none absolute inset-0 z-0 bg-black opacity-[0.32] md:hidden"
			/>
			<div className="relative z-10 mx-auto max-w-[980px]">
				<div
					ref={reveal.ref}
					className={cn(
						"grid gap-14 overflow-hidden transition-all duration-700 lg:grid-cols-[120px_1fr]",
						reveal.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
				>
					{/* Index number */}
					<div className="select-none pt-1.5 font-mono font-normal text-[80px] text-white/5 leading-none tracking-[-0.02em] lg:text-left">
						{String(index).padStart(2, "0")}
					</div>

					{/* Content */}
					<div>
						{/* Tags */}
						<div className="mb-4.5 flex flex-wrap gap-1.5">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded border border-white/10 px-2.5 py-0.75 font-mono text-[10px] text-white/40 uppercase tracking-[0.05em]"
								>
									{tag}
								</span>
							))}
						</div>

						{/* Title */}
						<h3 className="mb-4 font-display font-semibold text-[clamp(26px,3.5vw,42px)] text-white leading-[1.08] tracking-[-0.02em]">
							{project.title}
						</h3>

						{/* Description */}
						<p
							className="mb-6 max-w-[580px] text-[17px] text-white/60 leading-[1.55] tracking-[-0.022em]"
							style={{ textWrap: "pretty" }}
						>
							{project.description}
						</p>

						{/* Meta */}
						{(project.role || project.year) && (
							<div className="inline-flex items-center gap-2 font-mono text-[12px] text-primary tracking-[0.02em]">
								<span className="h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
								{project.role}
								{project.year && ` · ${project.year}`}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
