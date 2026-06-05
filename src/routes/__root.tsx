import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router"
import { AnimatedBackground } from "~/shared/components/animated-background"
import { useLenis } from "~/shared/hooks"
import {
	generateItemListSchema,
	generateOrganizationSchema,
	generatePersonSchema,
	generateWebSiteSchema,
} from "~/shared/utils/seo/schema-helpers"
import appCss from "../styles.css?url"

export const Route = createRootRoute({
	head: () => {
		return {
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					title:
						"Dezen - Fullstack Engineer (FE-focused) | React, TypeScript, Next.js Expert",
				},
				{
					name: "description",
					content:
						"Dezen is a Fullstack Engineer (FE-focused) with 4+ years of experience building scalable, high-performance web applications. Specializing in React, TypeScript, Next.js, Node.js, and modern frontend architecture. Based in Hanoi, Vietnam.",
				},
				{
					name: "keywords",
					content:
						"Dezen, Trung Tran Duy, Fullstack Developer, Frontend Lead, React Developer, TypeScript, Next.js, Node.js, Flutter, Dart, Go-lang, Fintech, Frontend Architecture, Performance Optimization, TailwindCSS, Zustand, Redux, Hanoi, Vietnam",
				},
				{ name: "author", content: "Dezen (Trung Tran Duy)" },
				{ name: "robots", content: "index, follow" },
				{ name: "language", content: "en" },
				{ name: "revisit-after", content: "7 days" },

				// Open Graph / Facebook
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: "https://dezen.me" },
				{
					property: "og:title",
					content:
						"Dezen - Fullstack Engineer (FE-focused) | React, TypeScript, Next.js Expert",
				},
				{
					property: "og:description",
					content:
						"Dezen is a Fullstack Engineer (FE-focused) with 4+ years building scalable web applications. Expert in React, TypeScript, Next.js, Node.js, and modern frontend architecture. Based in Hanoi, Vietnam.",
				},
				{
					property: "og:image",
					content: "/thumbnail.png",
				},
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:site_name", content: "Dezen Portfolio" },
				{ property: "og:locale", content: "en_US" },

				// Twitter
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:url", content: "https://dezen.me" },
				{
					name: "twitter:title",
					content:
						"Dezen - Fullstack Engineer (FE-focused) | React, TypeScript, Next.js Expert",
				},
				{
					name: "twitter:description",
					content:
						"Dezen is a Fullstack Engineer specializing in React, TypeScript, and Next.js. 4+ years building high-performance web applications. Based in Hanoi, Vietnam.",
				},
				{
					name: "twitter:image",
					content: "/thumbnail.png",
				},
				{ name: "twitter:site", content: "@itsdezenx" },
				{ name: "twitter:creator", content: "@itsdezenx" },

				// Additional SEO
				{ name: "theme-color", content: "#090909" },
				{ name: "msapplication-TileColor", content: "#090909" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-status-bar-style", content: "default" },
				{ name: "apple-mobile-web-app-title", content: "Dezen" },
				{ name: "mobile-web-app-capable", content: "yes" },

				// Schema.org structured data - Multiple schemas for entity recognition
				// Organization Schema - Establishes "Dezen" as a brand entity
				{
					"script:ld+json": generateOrganizationSchema(),
				},
				// WebSite Schema - Establishes official website
				{
					"script:ld+json": generateWebSiteSchema(),
				},
				// Person Schema - Links identity to brand
				{
					"script:ld+json": generatePersonSchema(),
				},
				// ItemList Schema - Structures portfolio projects
				{
					"script:ld+json": generateItemListSchema([
						{
							title: "Leet Finance - DeFi Platform",
							description:
								"Comprehensive DeFi platform with trading, staking, and analytics",
							url: "https://dezen.me#projects",
						},
						{
							title: "Peel.ID - Digital Identity Solution",
							description: "Web3 identity verification and management platform",
							url: "https://dezen.me#projects",
						},
						{
							title: "Goyomu - Task Management System",
							description:
								"Enterprise-grade task and project management application",
							url: "https://dezen.me#projects",
						},
						{
							title: "Bazan - Real Estate Platform",
							description:
								"Modern real estate marketplace with advanced search",
							url: "https://dezen.me#projects",
						},
						{
							title: "Nambla - Web3 Gaming Platform",
							description:
								"Blockchain-based gaming platform with NFT integration",
							url: "https://dezen.me#projects",
						},
					]),
				},
			],
			links: [
				{
					rel: "stylesheet",
					href: appCss,
				},
				{
					rel: "canonical",
					href: "https://dezen.me",
				},
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&display=swap",
				},

				// Favicon and icons
				{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
				{ rel: "shortcut icon", href: "/favicon.ico" },
				{
					rel: "icon",
					href: "/favicon-96x96.png",
					type: "image/png",
					sizes: "96x96",
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.png",
					sizes: "180x180",
				},

				// Manifest for PWA
				{ rel: "manifest", href: "/manifest.json" },

				// DNS prefetch for external services
				{ rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
				{ rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
			],
		}
	},

	shellComponent: RootDocument,
})

function RootDocument() {
	useLenis()

	return (
		<html lang="en" className="dark">
			<head>
				<HeadContent />
			</head>
			<body>
				{/* Hidden H1 for SEO - establishes "Dezen" as primary brand keyword */}
				<h1 className="sr-only">
					Dezen - Fullstack Engineer (FE-focused) specializing in React,
					TypeScript, and Next.js
				</h1>
				<AnimatedBackground variant="dark" />
				<Outlet />
				<Scripts />
			</body>
		</html>
	)
}
