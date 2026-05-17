/**
 * Centralized Metadata Configuration
 * Reusable metadata generators for SEO optimization
 */

import { BRAND, SEO, SITE, SOCIAL } from "~/shared/config/seo-constants"

/**
 * Generate page title with brand consistency
 */
export function generateTitle(pageTitle?: string): string {
	if (!pageTitle) {
		return SEO.title.default
	}

	return `${pageTitle} | ${BRAND.name}`
}

/**
 * Generate meta description
 */
export function generateDescription(customDescription?: string): string {
	return customDescription || SEO.description.long
}

/**
 * Generate OpenGraph metadata
 */
interface OpenGraphOptions {
	title?: string
	description?: string
	image?: string
	url?: string
	type?: "website" | "article" | "profile"
}

export function generateOpenGraph(options: OpenGraphOptions = {}) {
	return {
		type: options.type || "website",
		url: options.url || SITE.url,
		title: options.title || SEO.title.default,
		description: options.description || SEO.description.long,
		siteName: SITE.siteName,
		locale: SITE.locale,
		images: [
			{
				url: options.image || `${SITE.url}${SEO.ogImage.url}`,
				width: SEO.ogImage.width,
				height: SEO.ogImage.height,
				alt: options.title || SEO.ogImage.alt,
			},
		],
	}
}

/**
 * Generate Twitter Card metadata
 */
interface TwitterCardOptions {
	title?: string
	description?: string
	image?: string
	card?: "summary" | "summary_large_image"
}

export function generateTwitterCard(options: TwitterCardOptions = {}) {
	return {
		card: options.card || "summary_large_image",
		site: SOCIAL.twitter,
		creator: SOCIAL.twitter,
		title: options.title || SEO.title.default,
		description: options.description || SEO.description.long,
		images: [options.image || `${SITE.url}${SEO.ogImage.url}`],
	}
}

/**
 * Generate complete metadata object for TanStack Router
 */
interface PageMetadataOptions {
	title?: string
	description?: string
	keywords?: string[]
	image?: string
	url?: string
	type?: "website" | "article" | "profile"
	noindex?: boolean
}

export function generatePageMetadata(options: PageMetadataOptions = {}) {
	const title = generateTitle(options.title)
	const description = generateDescription(options.description)
	const keywords = options.keywords
		? [...SEO.keywords.slice(0, 5), ...options.keywords]
		: SEO.keywords

	return {
		// Basic meta tags
		title,
		description,
		keywords: keywords.join(", "),
		author: `${BRAND.name} (${BRAND.legalName})`,

		// Robots
		robots: options.noindex ? "noindex, nofollow" : "index, follow",

		// Canonical
		canonical: options.url || SITE.url,

		// Language
		"http-equiv": {
			"content-language": SITE.language,
		},

		// OpenGraph
		openGraph: generateOpenGraph({
			title,
			description,
			image: options.image,
			url: options.url,
			type: options.type,
		}),

		// Twitter
		twitter: generateTwitterCard({
			title,
			description,
			image: options.image,
		}),
	}
}

/**
 * Generate meta tags array for TanStack Router head() function
 */
export function generateMetaTags(options: PageMetadataOptions = {}) {
	const metadata = generatePageMetadata(options)

	return [
		// Basic meta tags
		{ charset: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ name: "description", content: metadata.description },
		{ name: "keywords", content: metadata.keywords },
		{ name: "author", content: metadata.author },
		{ name: "robots", content: metadata.robots },
		{ "http-equiv": "content-language", content: SITE.language },

		// Theme color
		{ name: "theme-color", content: SITE.themeColor },

		// OpenGraph
		{ property: "og:type", content: metadata.openGraph.type },
		{ property: "og:url", content: metadata.openGraph.url },
		{ property: "og:title", content: metadata.openGraph.title },
		{ property: "og:description", content: metadata.openGraph.description },
		{ property: "og:site_name", content: metadata.openGraph.siteName },
		{ property: "og:locale", content: metadata.openGraph.locale },
		{ property: "og:image", content: metadata.openGraph.images[0].url },
		{
			property: "og:image:width",
			content: String(metadata.openGraph.images[0].width),
		},
		{
			property: "og:image:height",
			content: String(metadata.openGraph.images[0].height),
		},
		{ property: "og:image:alt", content: metadata.openGraph.images[0].alt },

		// Twitter
		{ name: "twitter:card", content: metadata.twitter.card },
		{ name: "twitter:site", content: metadata.twitter.site },
		{ name: "twitter:creator", content: metadata.twitter.creator },
		{ name: "twitter:title", content: metadata.twitter.title },
		{ name: "twitter:description", content: metadata.twitter.description },
		{ name: "twitter:image", content: metadata.twitter.images[0] },
	]
}

/**
 * Generate link tags for TanStack Router head() function
 */
export function generateLinkTags(options: { canonical?: string } = {}) {
	return [
		{ rel: "canonical", href: options.canonical || SITE.url },
		{ rel: "icon", href: "/favicon.ico" },
		{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
		{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
		{ rel: "manifest", href: "/manifest.json" },
	]
}
