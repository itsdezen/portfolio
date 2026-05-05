"use client"

import { useScrollReveal } from "~/shared/hooks"
import { cn } from "~/shared/utils"
import type { SkillCategory } from "../portfolio-types"

interface SkillsSectionProps {
	categories: SkillCategory[]
}

export function SkillsSection({ categories }: SkillsSectionProps) {
	const eyebrow = useScrollReveal()
	const heading = useScrollReveal()
	const table = useScrollReveal()

	return (
		<section id="skills" className="scroll-mt-[52px] bg-black px-6 py-32">
			<div className="mx-auto max-w-[980px]">
				<p
					ref={eyebrow.ref}
					className={cn(
						"mb-6 font-mono text-[11px] text-white/30 uppercase tracking-[0.09em] transition-all duration-700",
						eyebrow.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
				>
					Stack
				</p>

				<h2
					ref={heading.ref}
					className={cn(
						"mb-18 font-display font-semibold text-[clamp(32px,4vw,52px)] text-white tracking-[-0.024em] transition-all duration-700",
						heading.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.1s" }}
				>
					Tools I reach for first.
				</h2>

				<div
					ref={table.ref}
					className={cn(
						"grid gap-0 overflow-hidden rounded-[14px] border border-white/[0.08] transition-all duration-700 md:grid-cols-3 lg:grid-cols-5",
						table.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.2s" }}
				>
					{categories.map((category, idx) => (
						<div
							key={category.title}
							className={cn(
								"border-white/[0.08] p-9",
								// Right border for all except last column
								"md:border-r lg:border-r",
								idx === 2 && "md:border-r-0",
								idx === 4 && "lg:border-r-0",
								// Bottom border for rows on mobile/tablet
								"md:border-b lg:border-b-0",
								idx >= 3 && "md:border-b-0",
							)}
						>
							<div className="mb-5 border-white/[0.07] border-b pb-4 font-mono text-[10px] text-white/30 uppercase tracking-[0.09em]">
								{category.title}
							</div>

							<div className="space-y-1.5">
								{category.skills.map((skill) => (
									<div
										key={skill.name}
										className={cn(
											"py-1.25 font-mono text-[13px] leading-[1.45]",
											skill.level === "accent" && "text-primary",
											skill.level === "highlight" && "text-white/90",
											!skill.level && "text-white/65",
										)}
									>
										{skill.name}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
