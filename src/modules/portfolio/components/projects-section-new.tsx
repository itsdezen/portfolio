"use client"

import { useScrollReveal } from "~/shared/hooks"
import { cn } from "~/shared/utils"
import type { Project } from "../portfolio-types"

interface ProjectsSectionNewProps {
	projects: Project[]
}

export function ProjectsSectionNew({ projects }: ProjectsSectionNewProps) {
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

	return (
		<div
			className={cn(
				"group relative border-white/[0.07] border-t px-6 py-20",
				variant === "dark" ? "bg-black" : "bg-[#1c1c1e]",
			)}
		>
			<div className="mx-auto max-w-[980px]">
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
				<img
					src={project.image}
					alt=""
					className="absolute top-0 right-0 bottom-0 h-full object-cover opacity-10 brightness-50 duration-300 ease-out sm:w-1/3 sm:translate-x-full sm:opacity-0 sm:opacity-100 sm:brightness-100 sm:group-hover:translate-x-0 sm:group-hover:opacity-50"
				/>
			</div>
		</div>
	)
}
