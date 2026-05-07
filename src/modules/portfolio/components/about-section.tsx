"use client"

import { useScrollReveal } from "~/shared/hooks"
import { cn } from "~/shared/utils"
import type { AboutInfo } from "../portfolio-types"

interface AboutSectionProps {
	about: AboutInfo
}

export function AboutSection({ about }: AboutSectionProps) {
	const eyebrow = useScrollReveal()
	const headline = useScrollReveal()
	const bio = useScrollReveal()
	const stats = useScrollReveal()

	return (
		<section
			id="about"
			className="scroll-mt-[52px] bg-gray px-6 py-32 text-ink"
		>
			<div className="mx-auto max-w-[980px]">
				{/* Eyebrow */}
				<p
					ref={eyebrow.ref}
					className={cn(
						"mb-6 font-mono text-[11px] text-muted-fg uppercase tracking-[0.09em] transition-all duration-700",
						eyebrow.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
				>
					About
				</p>

				{/* Headline */}
				<h2
					ref={headline.ref}
					className={cn(
						"mb-16 max-w-[620px] whitespace-pre-line font-display font-semibold text-[clamp(34px,4.5vw,52px)] leading-[1.07] tracking-[-0.024em] transition-all duration-700",
						headline.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.1s" }}
				>
					{about.title}
				</h2>

				{/* Two-column layout */}
				<div className="grid gap-20 lg:grid-cols-[1fr_380px]">
					{/* Bio */}
					<div
						ref={bio.ref}
						className={cn(
							"space-y-5 text-[17px] leading-[1.55] tracking-[-0.022em] transition-all duration-700",
							bio.isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-7 opacity-0",
						)}
						style={{ transitionDelay: "0.2s", textWrap: "pretty" }}
					>
						{about.description.map((paragraph, i) => (
							<p key={i}>{paragraph}</p>
						))}
					</div>

					{/* Stats grid */}
					{about.stats && about.stats.length > 0 && (
						<div
							ref={stats.ref}
							className={cn(
								"grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-fg/5 backdrop-blur transition-all duration-700",
								stats.isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-7 opacity-0",
							)}
							style={{ transitionDelay: "0.3s" }}
						>
							{about.stats.map((stat, i) => (
								<div key={i} className="bg-gray p-7">
									<div className="mb-1.5 font-display font-semibold text-[52px] leading-none tracking-[-0.025em]">
										{stat.number}
									</div>
									<div className="text-[13px] text-muted-fg leading-[1.45] tracking-[-0.01em]">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
