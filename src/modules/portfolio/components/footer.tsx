"use client"

export function Footer() {
	return (
		<footer className="border-white/[0.07] border-t bg-black px-6 py-7">
			<div className="mx-auto flex max-w-[980px] flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
				<span className="font-mono text-[11px] text-white/25 tracking-[0.02em]">
					Designed by onepercman
				</span>
				<span className="font-mono text-[11px] text-white/25 tracking-[0.02em]">
					Hanoi, Vietnam · GMT+7 · Open to Remote
				</span>
			</div>
		</footer>
	)
}
