import type {
	AboutInfo,
	ContactInfo,
	Experience,
	OSSPackage,
	OtherItem,
	Project,
	SkillCategory,
} from "./portfolio-types"

export const heroData = {
	name: "Trung Tran Duy",
	nickname: "onepercman",
	headline: "Less complexity,\nmore impact.",
	tagline:
		"Frontend Engineer specializing in real-time systems, Web3 architecture, and zero-to-one product development.",
	location: "Hanoi, Vietnam (GMT+7)",
	experience: "4+ years",
	status: "Available for opportunities",
	intro:
		"Frontend Engineer with 4+ years of experience building scalable, high-performance frontend systems across fintech, enterprise, and consumer products. Strong focus on real-time systems, complex UI architecture, and zero-to-one product development. Recognized for deep technical expertise, with experience leading frontend initiatives, improving engineering quality, and delivering production-ready systems.",
}

export const portfolioData = {
	name: "Trung Tran Duy",
	title: "Frontend Engineer & Web3 Architect",
	specialties: ["Real-time systems", "Zero-to-one products"],
	availability: {
		status: "Available for opportunities",
	},
	location: "Hanoi, Vietnam",
	timezone: "GMT+7",
	stats: [
		{ value: "4", suffix: "+", label: "Years prod" },
		{ value: "200", suffix: "+", label: "Web3 products" },
	],
	coreStack: [
		[
			{ name: "React", highlight: "gold" },
			{ name: "TypeScript", highlight: "gold" },
			{ name: "TailwindCSS", highlight: "hi" },
		],
		[
			{ name: "Next.js", highlight: "hi" },
			{ name: "Wagmi", highlight: "hi" },
			{ name: "Ethers.js", highlight: "hi" },
		],
		[{ name: "WebSocket" }, { name: "Three.js" }, { name: "NestJS" }],
		[{ name: "GSAP" }, { name: "Valtio" }],
	],
	website: {
		domain: "onepercman",
		extension: ".com",
	},
}

export const projects: Project[] = [
	// 2024 Projects
	{
		id: "1",
		title: "TheVapeLabs",
		description:
			"Responsible for all web products within the ecosystem. Built DApp interfaces, sale pages, and marketing websites. Designed scalable frontend architecture for multi-product system with consistent UI/UX. Acted as creative developer, collaborating with designers to build high-end animated landing pages. Note: Project name anonymized for confidentiality.",
		image:
			"https://link3-image.cyberconnect.dev/e669e0f2-1b0d-48c1-8e0d-04b7dd18eb51/avatarFolder/df2f385c8cb24fb8",
		category: "Web3 / Ecosystem",
		year: "2024",
		role: "Frontend Lead",
		tags: ["React", "TypeScript", "DApp", "Animation", "TailwindCSS"],
		link: "#",
		gradientFrom: "rgba(236, 72, 153, 0.9)",
		gradientTo: "rgba(219, 39, 119, 0.9)",
		layout: "desktop",
	},
	{
		id: "2",
		title: "AI Agent Platform",
		description:
			"SaaS platform enabling users to create, configure, and share AI agents. Built end-to-end agent configuration flows, subscription and usage-based system. UX optimized for non-technical users. Note: Project name anonymized for confidentiality.",
		image:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=1000&fit=crop&q=80",
		category: "AI / SaaS",
		year: "2024",
		role: "Frontend Lead",
		tags: ["React", "TypeScript", "Next.js", "AI", "Subscription"],
		link: "#",
		gradientFrom: "rgba(59, 130, 246, 0.9)",
		gradientTo: "rgba(6, 182, 212, 0.9)",
		layout: "desktop",
	},
	// 2023-2024 Projects
	{
		id: "3",
		title: "Trading Platform",
		description:
			"Real-time trading system supporting up to x1000 leverage. Led frontend architecture for price charts, trading dashboards, and orderbook visualization with live trade updates and low-latency UI rendering. Developed accurate PnL/ROI calculation systems. Note: Project name anonymized for confidentiality.",
		image:
			"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&h=1000&fit=crop&q=80",
		category: "Fintech / Trading",
		year: "2023-2024",
		role: "Frontend Lead",
		tags: ["React", "TypeScript", "WebSocket", "Real-time", "Charts"],
		link: "#",
		gradientFrom: "oklch(0.72 0.18 85 / 0.9)",
		gradientTo: "oklch(0.68 0.20 85 / 0.9)",
		layout: "desktop",
	},
	{
		id: "4",
		title: "P2P Trading Platform",
		description:
			"P2P trading platform with escrow-based transaction flows for premarket and OTC transactions. Designed UI for risk visibility and transparency, delivering stable and predictable trading experience. Note: Project name anonymized for confidentiality.",
		image:
			"https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1600&h=1000&fit=crop&q=80",
		category: "Fintech / P2P",
		year: "2023-2024",
		role: "Frontend Lead",
		tags: ["React", "TypeScript", "Ethers.js", "Wagmi", "Escrow"],
		link: "#",
		gradientFrom: "rgba(6, 182, 212, 0.9)",
		gradientTo: "rgba(14, 165, 233, 0.9)",
		layout: "desktop",
	},
	// 2022-2023 Projects
	{
		id: "5",
		title: "200+ Confidential Web3 Projects",
		description:
			"Delivered 200+ outsourced Web3 products for international clients covering major product categories: DEX, CEX, launchpads, NFT marketplaces, and trading tools. Built reusable frontend architectures to accelerate delivery across multiple projects. Ensured consistent quality, performance, and production readiness at scale. Acted as creative developer across projects, delivering high-end landing pages with rich animations.",
		image:
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&h=1000&fit=crop&q=80",
		category: "Web3 / Multi-Project",
		year: "2022-2023",
		role: "Frontend Lead",
		tags: ["React", "TypeScript", "Web3", "DEX", "NFT", "DApp"],
		link: "#",
		gradientFrom: "rgba(99, 102, 241, 0.9)",
		gradientTo: "rgba(139, 92, 246, 0.9)",
		layout: "desktop",
	},
	{
		id: "6",
		title: "RunTogether",
		description:
			"Move-to-Earn platform with DApp integration, NFT marketplace, and user-facing dashboards. Achieved 7,413 assets sold in 30 minutes, 15,000+ downloads in 6 days, and ranked Top #2 on Google Play Vietnam. Note: Project name anonymized for confidentiality.",
		image:
			"https://thanhnien.mediacdn.vn/Uploaded/nthanhluan/2022_04_24/278949514-463984475521822-5992632726712348321-n-575.jpg",
		category: "Web3 / Move-to-Earn",
		year: "2022-2023",
		role: "Frontend Lead",
		tags: ["React", "TypeScript", "Web3", "NFT", "DApp"],
		link: "#",
		gradientFrom: "rgba(16, 185, 129, 0.9)",
		gradientTo: "rgba(5, 150, 105, 0.9)",
		layout: "desktop",
	},
	{
		id: "7",
		title: "Mcity",
		description:
			"Interactive 3D DApps for metaverse environments built with Three.js and react-three-fiber. Developed NFT marketplace features within 3D context with optimized rendering performance. Collaborated with designers to deliver immersive visual experiences. Note: Project name anonymized for confidentiality.",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkAeiOMMshjSjeb2-97RCcV_J8Bmz7M-9iw&s",
		category: "Web3 / Metaverse",
		year: "2022-2023",
		role: "Frontend Lead",
		tags: ["React", "Three.js", "react-three-fiber", "WebGL", "NFT"],
		link: "#",
		gradientFrom: "rgba(168, 85, 247, 0.9)",
		gradientTo: "rgba(236, 72, 153, 0.9)",
		layout: "desktop",
	},
	{
		id: "8",
		title: "Animverse",
		description:
			"Built DApps including NFT marketplace, IDO platform, and sale pages. Designed scalable frontend systems for GameFi ecosystem. Delivered animated, high-conversion landing pages in collaboration with design team. Note: Project name anonymized for confidentiality.",
		image:
			"https://cdn.dorahacks.io/static/files/18f9530333f823fadc8886540d28eb86.png",
		category: "Web3 / GameFi",
		year: "2022-2023",
		role: "Frontend Lead",
		tags: ["React", "TypeScript", "Web3", "GameFi", "IDO"],
		link: "#",
		gradientFrom: "oklch(0.75 0.16 85 / 0.9)",
		gradientTo: "oklch(0.72 0.18 85 / 0.9)",
		layout: "desktop",
	},
	// 2021-2022 Projects (Teracom)
	{
		id: "9",
		title: "Son La HPC",
		description:
			"Refactored large-scale frontend system for hydropower plant management. Enhanced structure and code quality, improving maintainability and performance for enterprise-grade government infrastructure system.",
		image:
			"https://cdn-i.vtcnews.vn/resize/th/upload/2023/07/16/nhieu-nha-may-thuy-dien-tang-cong-suat-phat-dien-xa-tran-don-lu-11163427.jpg",
		category: "Enterprise / Government",
		year: "2021-2022",
		role: "Frontend Engineer",
		tags: ["React", "TypeScript", "Enterprise", "Refactoring"],
		link: "#",
		gradientFrom: "rgba(34, 197, 94, 0.9)",
		gradientTo: "rgba(22, 163, 74, 0.9)",
		layout: "desktop",
	},
	{
		id: "10",
		title: "Vinh Tan TPC",
		description:
			"Migrated legacy thermal power plant management system to Next.js + TypeScript. Improved performance and maintainability with modern architecture, introducing SSR for better SEO and user experience.",
		image: "https://dl.vinhtantpc.com.vn:8888/img/3334.png",
		category: "Enterprise / Government",
		year: "2021-2022",
		role: "Frontend Engineer",
		tags: ["Next.js", "TypeScript", "SSR", "Migration"],
		link: "#",
		gradientFrom: "rgba(59, 130, 246, 0.9)",
		gradientTo: "rgba(37, 99, 235, 0.9)",
		layout: "desktop",
	},
	// Open Source Projects (2024)
	{
		id: "11",
		title: "Tailwind Color Schemes Plugin",
		description:
			"Open source Tailwind CSS plugin that provides a flexible way to define and use color schemes. Supports global colors, scheme-specific colors with optional opacity, and seamless integration with Tailwind's design system. Published on npm for the developer community.",
		image:
			"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&h=1000&fit=crop&q=80",
		category: "Open Source / Developer Tools",
		year: "2024",
		role: "Creator & Maintainer",
		tags: ["Tailwind CSS", "Plugin", "TypeScript", "CSS", "npm"],
		link: "https://github.com/onepercman/tailwindcss-color-schemes",
		gradientFrom: "rgba(56, 189, 248, 0.9)",
		gradientTo: "rgba(99, 102, 241, 0.9)",
		layout: "desktop",
	},
	{
		id: "12",
		title: "use-composed-refs",
		description:
			"Lightweight utility library for managing multiple refs in reusable React components with TypeScript support. Simplifies ref handling by providing an easy-to-use hook and utility function, enabling better ref management and flexibility in complex component structures.",
		image:
			"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&h=1000&fit=crop&q=80",
		category: "Open Source / React Library",
		year: "2024",
		role: "Creator & Maintainer",
		tags: ["React", "TypeScript", "Hooks", "Refs", "npm"],
		link: "https://github.com/onepercman/use-composed-refs",
		gradientFrom: "rgba(16, 185, 129, 0.9)",
		gradientTo: "rgba(5, 150, 105, 0.9)",
		layout: "desktop",
	},
	{
		id: "13",
		title: "use-valtio-store",
		description:
			"React hook for managing state using Valtio with support for persistent states via localStorage and sessionStorage. Provides a simple and powerful way to handle state management with built-in persistence capabilities for React applications.",
		image:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=1000&fit=crop&q=80",
		category: "Open Source / State Management",
		year: "2024",
		role: "Creator & Maintainer",
		tags: ["React", "Valtio", "State Management", "TypeScript", "npm"],
		link: "https://github.com/onepercman/use-valtio-store",
		gradientFrom: "rgba(168, 85, 247, 0.9)",
		gradientTo: "rgba(236, 72, 153, 0.9)",
		layout: "desktop",
	},
	{
		id: "14",
		title: "TanStack Start Starter",
		description:
			"Production-ready starter template for TanStack Start with modern React development setup. Features full-stack TypeScript, file-based routing, SSR support, and pre-configured tooling for building high-performance web applications with TanStack ecosystem.",
		image: "https://nikuscs.com/_astro/cover.DNBtBKaU_1XkO7C.webp",
		category: "Open Source / Starter Template",
		year: "2024",
		role: "Creator & Maintainer",
		tags: ["TanStack Start", "React", "TypeScript", "SSR", "Full-stack"],
		link: "https://github.com/onepercman/tanstack-start-starter",
		gradientFrom: "oklch(0.72 0.18 85 / 0.9)",
		gradientTo: "oklch(0.68 0.20 85 / 0.9)",
		layout: "desktop",
	},
]

export const aboutData: AboutInfo = {
	title: "Building systems that scale.\nInterfaces that last.",
	description: [
		"I'm Trung — a Frontend Engineer with 4+ years shipping production systems across fintech, enterprise, and Web3. I specialize in real-time UI architecture, complex state management, and the kind of zero-to-one work where the stack doesn't exist yet.",
		"I've built a derivatives trading platform running x1000 leverage on live WebSocket feeds, shipped an NFT ecosystem that sold 7,413 assets in 30 minutes, and delivered 200+ outsourced DApp products across DEX, CEX, launchpad, and GameFi verticals.",
		"Currently freelancing and exploring AI-assisted development workflows — treating models as pair-programmers, not code generators. The motto: one percent better, every day.",
	],
	image: "/avatar.jpeg",
	images: ["/avatar.jpeg", "/portrait.jpeg"],
	highlights: [],
	stats: [
		{ number: "4+", label: "Years shipping in production" },
		{ number: "200+", label: "Web3 products delivered" },
		{ number: "7.4K", label: "NFT assets sold in 30 min" },
		{ number: "15K+", label: "App downloads in 6 days" },
	],
}

export const experiences: Experience[] = [
	{
		id: "1",
		company: "EnhancedLab",
		role: "Frontend Lead",
		period: "Feb 2024 – Nov 2024",
		description:
			"Responsible for all web products within TheVapeLabs ecosystem. Built DApp interfaces, sale pages, and marketing websites. Designed scalable frontend architecture for multi-product system with consistent UI/UX. Acted as creative developer, collaborating with designers to build high-end animated landing pages.",
	},
	{
		id: "2",
		company: "SyncX (Fully Confidential)",
		role: "Frontend Lead",
		period: "Nov 2023 – Aug 2024",
		description:
			"Led frontend architecture across multiple confidential products: P2P Trading Platform with escrow-based transaction flows, AI Agent Platform with end-to-end agent configuration and subscription systems, and Trading Platform with real-time price charts, orderbook visualization, live trade updates, and accurate PnL/ROI calculations.",
	},
	{
		id: "3",
		company: "Moonlab",
		role: "Frontend Lead",
		period: "Apr 2022 – Aug 2023",
		description:
			"Delivered 200+ outsourced Web3 products (DEX, CEX, launchpads, NFT marketplaces, trading tools). Led RunTogether (7,413 assets sold in 30 minutes, 15,000+ downloads in 6 days, Top #2 Google Play Vietnam), Mcity metaverse platform with Three.js, and Animverse GameFi ecosystem. Defined frontend architecture and engineering standards, mentored engineers and trained interns to full-time conversion.",
	},
	{
		id: "4",
		company: "Teracom",
		role: "Frontend Engineer (Intern → Junior)",
		period: "Jun 2021 – Apr 2022",
		description:
			"Built CMS platforms and government portals. Introduced SSR to improve SEO and performance. Refactored large-scale frontend systems (Son La HPC) and migrated legacy systems to Next.js + TypeScript (Vinh Tan TPC).",
	},
]

export const contactData: ContactInfo = {
	email: "onepercman@gmail.com",
	phone: "+84 889 388 820",
	socials: [
		{
			name: "GitHub",
			url: "https://github.com/onepercman",
			icon: "github",
		},
		{
			name: "LinkedIn",
			url: "https://linkedin.com/in/onepercman",
			icon: "linkedin",
		},
		{
			name: "Telegram",
			url: "https://t.me/onepercman",
			icon: "send",
		},
	],
}

export const otherItems: OtherItem[] = [
	{
		id: "1",
		title: "GitHub",
		description: "View my open source projects and contributions",
		href: "https://github.com/onepercman",
		icon: "code",
		gradientFrom: "from-violet-500",
		gradientTo: "to-purple-500",
		isExternal: true,
	},
	{
		id: "2",
		title: "LinkedIn",
		description: "Connect with me professionally",
		href: "https://linkedin.com/in/onepercman",
		icon: "linkedin",
		gradientFrom: "from-blue-500",
		gradientTo: "to-cyan-500",
		isExternal: true,
	},
	{
		id: "3",
		title: "Email Me",
		description: "Get in touch for opportunities or collaboration",
		href: "mailto:onepercman@gmail.com",
		icon: "mail",
		gradientFrom: "from-pink-500",
		gradientTo: "to-rose-500",
	},
]

export const skillCategories: SkillCategory[] = [
	{
		title: "Frontend",
		skills: [
			{ name: "React", level: "accent" },
			{ name: "TypeScript", level: "accent" },
			{ name: "Next.js", level: "highlight" },
			{ name: "TailwindCSS", level: "highlight" },
			{ name: "TanStack" },
			{ name: "Vite / Remix" },
			{ name: "Shadcn/UI" },
		],
	},
	{
		title: "State & Data",
		skills: [
			{ name: "Valtio", level: "accent" },
			{ name: "Zustand", level: "highlight" },
			{ name: "React Query", level: "highlight" },
			{ name: "Redux" },
			{ name: "WebSocket" },
			{ name: "REST / GraphQL" },
		],
	},
	{
		title: "Web3",
		skills: [
			{ name: "Wagmi", level: "accent" },
			{ name: "Ethers.js", level: "highlight" },
			{ name: "DeFi / DEX", level: "highlight" },
			{ name: "NFT / GameFi" },
			{ name: "EVM Chains" },
			{ name: "Smart Contracts" },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "NestJS", level: "highlight" },
			{ name: "Hono", level: "highlight" },
			{ name: "Go" },
			{ name: "PostgreSQL" },
			{ name: "Redis" },
		],
	},
	{
		title: "Creative & AI",
		skills: [
			{ name: "Claude Code", level: "accent" },
			{ name: "Three.js", level: "highlight" },
			{ name: "react-three-fiber", level: "highlight" },
			{ name: "WebGL / GLSL" },
			{ name: "Flutter / Dart" },
			{ name: "AI Workflows" },
		],
	},
]

export const ossPackages: OSSPackage[] = [
	{
		name: "tailwind-schemes",
		description:
			"Flexible CSS color scheme plugin for Tailwind. Multi-theme, token-based, zero runtime overhead.",
	},
	{
		name: "use-composed-refs",
		description:
			"React hook for cleanly merging multiple refs onto a single DOM element. TypeScript-first API.",
	},
	{
		name: "use-valtio-store",
		description:
			"State management hook built on Valtio with automatic persistence and a minimal, typed interface.",
	},
]
