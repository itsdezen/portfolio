export interface Project {
	id: string
	title: string
	description: string
	image: string
	year?: string
	role?: string
	category: string
	tags: string[]
	link: string
	gradientFrom: string
	gradientTo: string
	layout: "desktop" | "mobile"
	screenshots?: string[]
}

export interface Experience {
	id: string
	company: string
	role: string
	period: string
	description: string
}

export interface AboutInfo {
	title: string
	description: string[]
	image: string
	images?: string[]
	highlights?: {
		label: string
		description: string
		position: { x: number; y: number }
	}[]
	stats?: {
		number: string
		label: string
	}[]
}

export interface ContactInfo {
	email: string
	phone?: string
	socials: {
		name: string
		url: string
		icon: string
	}[]
}

export interface OtherItem {
	id: string
	title: string
	description: string
	href: string
	icon: string
	gradientFrom: string
	gradientTo: string
	isExternal?: boolean
	badge?: string
}

export interface SkillCategory {
	title: string
	skills: SkillItem[]
}

export interface SkillItem {
	name: string
	level?: "accent" | "highlight" | "normal"
}

export interface OSSPackage {
	name: string
	description: string
}
