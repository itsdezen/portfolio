"use client"

import { useScrollReveal } from "~/shared/hooks"
import { cn } from "~/shared/utils"
import type { ContactInfo } from "../portfolio-types"

interface ContactSectionNewProps {
	contact: ContactInfo
}

export function ContactSectionNew({ contact }: ContactSectionNewProps) {
	const eyebrow = useScrollReveal()
	const heading = useScrollReveal()
	const email = useScrollReveal<HTMLAnchorElement>()
	const socials = useScrollReveal()

	return (
		<section
			id="contact"
			className="scroll-mt-[52px] bg-black px-6 pt-40 pb-32 text-center"
		>
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
					Let's work together
				</p>

				<h2
					ref={heading.ref}
					className={cn(
						"mx-auto mb-12 max-w-[700px] font-display font-semibold text-[clamp(44px,7vw,88px)] text-white leading-[1.02] tracking-[-0.035em] transition-all duration-700",
						heading.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.1s" }}
				>
					Have something to build?
				</h2>

				<a
					ref={email.ref}
					href={`mailto:${contact.email}`}
					className={cn(
						"mb-16 block font-display text-[clamp(20px,2.8vw,30px)] text-primary tracking-[-0.015em] transition-all duration-700 hover:opacity-72",
						email.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.2s" }}
				>
					{contact.email}
				</a>

				<div
					ref={socials.ref}
					className={cn(
						"flex flex-wrap justify-center gap-9 transition-all duration-700",
						socials.isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-7 opacity-0",
					)}
					style={{ transitionDelay: "0.3s" }}
				>
					{contact.socials.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[15px] text-white/45 tracking-[-0.01em] transition-colors hover:text-white"
						>
							{social.name}
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
