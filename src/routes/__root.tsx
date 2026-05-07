import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router"
import { AnimatedBackground } from "~/shared/components/animated-background"
import { useLenis } from "~/shared/hooks"
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
					title: "onepercman | Fullstack Developer",
				},
				{
					name: "description",
					content:
						"Fullstack Engineer specializing in building scalable, high-performance web applications. 5+ years crafting modern solutions with React, TypeScript, Next.js, and Node.js. Available for consulting and collaboration on innovative projects.",
				},
				{
					name: "keywords",
					content:
						"onepercman, Trung Tran Duy, Fullstack Developer, Frontend Lead, React Developer, TypeScript, Next.js, Node.js, Flutter, Dart, Go-lang, Fintech, Frontend Architecture, Performance Optimization, TailwindCSS, Zustand, Redux, Hanoi, Vietnam",
				},
				{ name: "author", content: "onepercman (Trung Tran Duy)" },
				{ name: "robots", content: "index, follow" },
				{ name: "language", content: "en" },
				{ name: "revisit-after", content: "7 days" },

				// Open Graph / Facebook
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: "https://onepercman.com" },
				{
					property: "og:title",
					content:
						"onepercman | Fullstack Developer - React, TypeScript, Node.js",
				},
				{
					property: "og:description",
					content:
						"Fullstack Developer with 5+ years building complex frontend systems across enterprise, consumer, and fintech products. Expert in React, TypeScript, Next.js, Node.js, Flutter, and Go-lang. Based in Hanoi, Vietnam.",
				},
				{
					property: "og:image",
					content: "/thumbnail.png",
				},
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:site_name", content: "onepercman Portfolio" },
				{ property: "og:locale", content: "en_US" },

				// Twitter
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:url", content: "https://onepercman.com" },
				{
					name: "twitter:title",
					content:
						"onepercman | Fullstack Developer - React, TypeScript, Node.js",
				},
				{
					name: "twitter:description",
					content:
						"Fullstack Developer building complex systems with React, TypeScript, Node.js, and more. Based in Hanoi, Vietnam.",
				},
				{
					name: "twitter:image",
					content: "/thumbnail.png",
				},
				{ name: "twitter:site", content: "@onepercman" },
				{ name: "twitter:creator", content: "@onepercman" },

				// Additional SEO
				{ name: "theme-color", content: "#090909" },
				{ name: "msapplication-TileColor", content: "#090909" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-status-bar-style", content: "default" },
				{ name: "apple-mobile-web-app-title", content: "onepercman" },
				{ name: "mobile-web-app-capable", content: "yes" },

				// Schema.org structured data
				{
					"script:ld+json": {
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Trung Tran Duy",
						alternateName: "onepercman",
						description:
							"Fullstack Developer with 5+ years of experience building complex frontend systems across enterprise, consumer, and fintech products",
						url: "https://onepercman.com",
						image: "/thumbnail.png",
						email: "onepercman@gmail.com",
						sameAs: [
							"https://github.com/onepercman",
							"https://linkedin.com/in/onepercman",
							"https://t.me/onepercman",
						],
						jobTitle: "Fullstack Developer",
						worksFor: {
							"@type": "Organization",
							name: "Freelance",
						},
						knowsAbout: [
							"React",
							"TypeScript",
							"Next.js",
							"Node.js",
							"Frontend Architecture",
							"Performance Optimization",
							"TailwindCSS",
							"Zustand",
							"Redux",
							"Flutter",
							"Dart",
							"Go",
							"Real-time Systems",
							"Fintech",
							"Wagmi",
							"Ethers.js",
							"Smart Contracts",
						],
						address: {
							"@type": "PostalAddress",
							addressLocality: "Hanoi",
							addressCountry: "VN",
						},
					},
				},
			],
			links: [
				{
					rel: "stylesheet",
					href: appCss,
				},
				{
					rel: "canonical",
					href: "https://onepercman.com",
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
				<AnimatedBackground variant="dark" />
				<Outlet />
				<Scripts />
			</body>
		</html>
	)
}
