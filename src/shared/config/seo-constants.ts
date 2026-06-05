/**
 * SEO Constants - Brand Entity Configuration
 * Centralized brand information for "Dezen" entity recognition
 */

export const BRAND = {
	// Primary brand name - CRITICAL for Google entity recognition
	name: "Dezen",

	// Legal/Real name
	legalName: "Trung Tran Duy",

	// Alternate spellings/names for entity matching
	alternateNames: ["Dezen", "Trung Tran Duy", "dezen.me"],

	// Tagline/Slogan
	tagline: "Fullstack Engineer (FE-focused)",

	// Full description
	description:
		"Dezen is a Fullstack Engineer (FE-focused) with 4+ years of experience building scalable, high-performance web applications. Specializing in React, TypeScript, Next.js, and modern frontend architecture.",
} as const

export const SITE = {
	// Canonical domain - MUST be consistent everywhere
	url: "https://dezen.me",

	// Site name for OpenGraph
	siteName: "Dezen Portfolio",

	// Default locale
	locale: "en_US",

	// Language
	language: "en",

	// Theme color
	themeColor: "#000000",
} as const

export const PERSON = {
	// Email
	email: "itsdezen@gmail.com",

	// Phone
	telephone: "+84 889 388 820",

	// Job title
	jobTitle: "Fullstack Engineer (FE-focused)",

	// Current work
	worksFor: "Freelance",

	// Location
	location: {
		locality: "Hanoi",
		country: "VN",
		countryName: "Vietnam",
	},

	// Profile image
	image: "/thumbnail.png",

	// CV/Resume
	resumeUrl: "/cv.pdf",
} as const

export const SOCIAL = {
	// Social profiles - MUST use brand name consistently
	github: "https://github.com/itsdezen",
	linkedin: "https://linkedin.com/in/itsdezen",
	telegram: "https://t.me/itsdezen",
	twitter: "@itsdezenx",

	// All profiles in array for schema
	profiles: [
		"https://github.com/itsdezen",
		"https://linkedin.com/in/itsdezen",
		"https://t.me/itsdezen",
	],
} as const

export const SKILLS = {
	// Technical skills for knowledge graph
	primary: [
		"React",
		"TypeScript",
		"Next.js",
		"Node.js",
		"TailwindCSS",
		"Frontend Architecture",
	],

	// Full skill list
	all: [
		"React",
		"TypeScript",
		"Next.js",
		"Node.js",
		"Vue.js",
		"Nuxt.js",
		"TailwindCSS",
		"Zustand",
		"Redux",
		"React Query",
		"Flutter",
		"Dart",
		"Go-lang",
		"PostgreSQL",
		"MongoDB",
		"Redis",
		"Docker",
		"AWS",
		"Cloudflare",
		"Vercel",
		"Frontend Architecture",
		"Performance Optimization",
		"Web3",
		"Solidity",
		"Smart Contracts",
	],
} as const

export const SEO = {
	// Default metadata
	title: {
		template: "%s | Dezen",
		default: "Dezen - Fullstack Engineer (FE-focused) | Portfolio",
	},

	description: {
		short:
			"Dezen is a Fullstack Engineer specializing in React, TypeScript, and Next.js. 4+ years building high-performance web applications.",
		long: "Dezen is a Fullstack Engineer (FE-focused) with 4+ years of experience building scalable, high-performance web applications across enterprise, fintech, and consumer products. Expert in React, TypeScript, Next.js, Node.js, and modern frontend architecture.",
	},

	keywords: [
		// Brand keywords - FIRST for priority
		"Dezen",
		"Trung Tran Duy",

		// Role keywords
		"Fullstack Engineer",
		"Fullstack Developer",
		"Frontend Lead",
		"React Developer",
		"TypeScript Developer",

		// Technology keywords
		"React",
		"TypeScript",
		"Next.js",
		"Node.js",
		"TailwindCSS",
		"Frontend Architecture",

		// Industry keywords
		"Fintech",
		"Web3",
		"Performance Optimization",

		// Location keywords
		"Hanoi",
		"Vietnam",
		"Vietnamese Developer",
	],

	// OpenGraph image
	ogImage: {
		url: "/thumbnail.png",
		width: 1200,
		height: 630,
		alt: "Dezen - Fullstack Engineer Portfolio",
	},
} as const

export const COMPANY = {
	// Organization info for schema
	name: "Dezen",
	legalName: "Dezen",
	foundingDate: "2020",
	description:
		"Independent software engineering brand specializing in fullstack web development",
	logo: "/logo.svg",

	// Contact point
	contactPoint: {
		contactType: "Professional Inquiry",
		email: PERSON.email,
		telephone: PERSON.telephone,
	},
} as const
