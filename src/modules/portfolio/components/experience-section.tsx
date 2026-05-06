"use client"

import { useScrollReveal } from "~/shared/hooks"
import { cn } from "~/shared/utils"
import type { Experience } from "../portfolio-types"

interface ExperienceSectionProps {
	experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
	const eyebrow = useScrollReveal()
	const heading = useScrollReveal()

	return (
		<section
			id="experience"
			className="scroll-mt-[52px] bg-gray px-6 py-32 text-ink"
		>
			<div className="mx-auto max-w-[980px]">
				<p
					ref={eyebrow.ref}
					className={cn(
						"mb-6 font-mono text-[11px] text-muted-fg uppercase tracking-[0.09em] transition-all duration-700",
						eyebrow.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
				>
					Experience
				</p>

				<h2
					ref={heading.ref}
					className={cn(
						"mb-20 font-display font-semibold text-[clamp(32px,4vw,52px)] tracking-[-0.024em] transition-all duration-700",
						heading.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.1s" }}
				>
					Where I've shipped.
				</h2>

				{/* Timeline */}
				<div className="relative md:pl-60">
					{/* Vertical line */}
					<div className="absolute top-2 bottom-0 left-[240.5px] hidden w-px bg-fg/60 md:block" />

					{/* Entries */}
					<div className="space-y-12 md:space-y-18">
						{experiences.map((exp) => (
							<TimelineEntry key={exp.id} experience={exp} />
						))}

						{/* Education */}
						<TimelineEntry
							experience={{
								id: "edu",
								company: "Academy of Cryptography Techniques · Hanoi",
								role: "Software Engineer",
								period: "2017 — 2022",
								description:
									"Studied software engineering and cryptographic protocols. Built early interest in systems programming and security-sensitive applications.",
							}}
							isEducation
						/>
					</div>

					{/* CV Download CTA */}
					<CVDownloadCTA />
				</div>
			</div>
		</section>
	)
}

function CVDownloadCTA() {
	const reveal = useScrollReveal()

	return (
		<div
			ref={reveal.ref}
			className={cn(
				"mt-20 transition-all duration-700 md:pl-12",
				reveal.isVisible
					? "translate-y-0 opacity-100"
					: "translate-y-7 opacity-0",
			)}
		>
			<a
				href="/cv.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					"inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 font-medium text-[15px] text-accent-fg transition-all duration-300 hover:scale-105 hover:shadow-accent/20 hover:shadow-lg active:scale-95",
				)}
			>
				<svg
					className="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
				Download Full CV
			</a>
			<p className="mt-3 text-[13px] text-muted-fg">
				Complete resume with detailed project breakdowns and references
			</p>
		</div>
	)
}

function TimelineEntry({
	experience,
	isEducation = false,
}: {
	experience: Experience
	isEducation?: boolean
}) {
	const reveal = useScrollReveal()

	return (
		<div
			ref={reveal.ref}
			className={cn(
				"relative transition-all duration-700 md:pl-12",
				reveal.isVisible
					? "translate-y-0 opacity-100"
					: "translate-y-7 opacity-0",
			)}
		>
			{/* Dot */}
			<div
				className={cn(
					"absolute top-1.5 -left-1 hidden h-2.5 w-2.5 rounded-full border-[2.5px] border-gray md:block",
					isEducation ? "bg-muted-fg" : "bg-fg/50",
				)}
			/>

			{/* Date */}
			<div className="mb-2 font-mono text-[11px] text-muted-fg tracking-[0.02em] md:absolute md:top-0.5 md:right-full md:mb-0 md:w-40 md:pr-8 md:text-right">
				{experience.period}
			</div>

			{/* Content */}
			<div>
				<h3 className="mb-0.75 font-display font-semibold text-[21px] tracking-[-0.012em]">
					{experience.role}
				</h3>
				<div className="mb-3.5 text-[15px] text-muted-fg">
					{experience.company}
				</div>
				<p
					className="max-w-[560px] text-[15px] leading-[1.57]"
					style={{ textWrap: "pretty" }}
				>
					{experience.description}
				</p>
			</div>
		</div>
	)
}
