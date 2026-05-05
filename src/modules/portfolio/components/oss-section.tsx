"use client"

import { useScrollReveal } from "~/shared/hooks"
import { cn } from "~/shared/utils"
import type { OSSPackage } from "../portfolio-types"

interface OSSSectionProps {
	packages: OSSPackage[]
}

export function OSSSection({ packages }: OSSSectionProps) {
	const eyebrow = useScrollReveal()
	const heading = useScrollReveal()
	const grid = useScrollReveal()

	return (
		<div className="border-white/[0.07] border-t bg-[#1c1c1e] px-6 py-20">
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
					Open Source
				</p>

				<h3
					ref={heading.ref}
					className={cn(
						"mb-12 font-display font-semibold text-[clamp(24px,3vw,36px)] text-white tracking-[-0.02em] transition-all duration-700",
						heading.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.1s" }}
				>
					Published on npm.
				</h3>

				<div
					ref={grid.ref}
					className={cn(
						"grid gap-px overflow-hidden rounded-[14px] border border-white/[0.08] bg-white/[0.08] transition-all duration-700 md:grid-cols-3",
						grid.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.2s" }}
				>
					{packages.map((pkg) => (
						<div
							key={pkg.name}
							className="bg-[#1c1c1e] p-9 transition-colors duration-200 hover:bg-white/[0.035]"
						>
							<div className="mb-3 font-mono text-[14px] text-white">
								{pkg.name}
							</div>
							<div className="text-[14px] text-white/50 leading-[1.55]">
								{pkg.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
