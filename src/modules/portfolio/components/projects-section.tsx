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
	const sectionRef = useRef<HTMLElement>(null)
	const stackRef = useRef<HTMLDivElement>(null)
	const projectRefs = useRef<HTMLDivElement[]>([])
	const intro = useScrollReveal()
	const heading = useScrollReveal()

	// Filter out OSS projects (ids 11-14)
	const mainProjects = projects.filter(
		(p) => !["11", "12", "13", "14"].includes(p.id),
	)

	useGSAP(
		() => {
			const stack = stackRef.current
			const cards = projectRefs.current.filter(Boolean)
			if (!stack || cards.length === 0) return

			gsap.set(cards, {
				clearProps: "all",
				transformOrigin: "50% 0%",
			})

			cards.forEach((card, index) => {
				gsap.set(card, {
					zIndex: index + 1,
					yPercent: index === 0 ? 0 : 100,
					rotateX: 0,
					rotateZ: 0,
				})
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: stack,
					start: "top 52px",
					end: () => `+=${(window.innerHeight - 52) * (cards.length - 1)}`,
					scrub: true,
					invalidateOnRefresh: true,
				},
			})

			cards.slice(1).forEach((card, index) => {
				const previousCard = cards[index]
				tl.to(
					previousCard,
					{
						scale: 1.5,
						yPercent: -10,
						rotateX: -10,
						opacity: 0,
						rotateZ: index % 2 === 0 ? -10 : 10,
						ease: "none",
					},
					index,
				)
				tl.to(
					card,
					{
						yPercent: 0,
						ease: "power1.inOut",
					},
					index,
				)
			})
		},
		{ scope: sectionRef, dependencies: [mainProjects.length] },
	)

	return (
		<section
			ref={sectionRef}
			id="projects"
			className="scroll-mt-[52px] bg-black"
		>
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

			<div
				ref={stackRef}
				className="relative"
				style={{ height: `calc(${mainProjects.length} * (100vh - 52px))` }}
			>
				<div className="sticky top-[52px] h-[calc(100vh-52px)] overflow-hidden">
					{mainProjects.map((project, index) => (
						<ProjectBand
							key={project.id}
							project={project}
							index={index + 1}
							ref={(element) => {
								if (element) projectRefs.current[index] = element
							}}
							variant={index % 2 === 0 ? "dark" : "graphite"}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

function ProjectBand({
	project,
	index,
	ref,
	variant,
}: {
	project: Project
	index: number
	ref: (element: HTMLDivElement | null) => void
	variant: "dark" | "graphite"
}) {
	const reveal = useScrollReveal()

	return (
		<div
			ref={ref}
			className={cn(
				"group absolute inset-0 overflow-hidden border-white/[0.07] border-t px-6 py-20",
				variant === "dark" ? "bg-black" : "bg-[#1c1c1e]",
			)}
			style={{ zIndex: index }}
		>
			<img
				data-project-image
				src={project.image}
				alt=""
				className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-10 md:left-auto md:w-1/3 md:brightness-75"
			/>
			<div className="pointer-events-none absolute inset-0 z-0 bg-black opacity-[0.32] md:hidden" />
			<div
				data-project-content
				className="relative z-10 mx-auto flex h-full max-w-[980px] items-center"
			>
				<div
					ref={reveal.ref}
					className={cn(
						"grid w-full gap-14 overflow-hidden transition-all duration-700 lg:grid-cols-[120px_1fr]",
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
