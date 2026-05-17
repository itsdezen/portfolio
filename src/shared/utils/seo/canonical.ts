/**
 * Canonical URL Helpers
 * Ensures consistent URL structure for SEO
 */

import { SITE } from "~/shared/config/seo-constants"

/**
 * Normalize URL by removing trailing slashes and ensuring HTTPS
 */
export function normalizeUrl(url: string): string {
	// Remove trailing slash
	let normalized = url.replace(/\/$/, "")

	// Ensure HTTPS
	if (normalized.startsWith("http://")) {
		normalized = normalized.replace("http://", "https://")
	}

	// Ensure absolute URL
	if (!normalized.startsWith("http")) {
		normalized = `${SITE.url}${normalized.startsWith("/") ? "" : "/"}${normalized}`
	}

	return normalized
}

/**
 * Generate canonical URL for a page
 */
export function getCanonicalUrl(path?: string): string {
	if (!path || path === "/") {
		return SITE.url
	}

	// Remove hash fragments
	const cleanPath = path.split("#")[0]

	// Remove query parameters for canonical
	const pathWithoutQuery = cleanPath.split("?")[0]

	return normalizeUrl(`${SITE.url}${pathWithoutQuery}`)
}

/**
 * Generate alternate language URLs
 * For future internationalization
 */
export function generateAlternateUrls(
	path: string,
	locales: string[] = ["en"],
): Array<{ locale: string; url: string }> {
	return locales.map((locale) => ({
		locale,
		url: getCanonicalUrl(path),
	}))
}

/**
 * Check if URL is internal
 */
export function isInternalUrl(url: string): boolean {
	try {
		const urlObj = new URL(url, SITE.url)
		return urlObj.hostname === new URL(SITE.url).hostname
	} catch {
		return false
	}
}

/**
 * Generate absolute URL from relative path
 */
export function toAbsoluteUrl(path: string): string {
	if (path.startsWith("http")) {
		return path
	}

	return `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`
}

/**
 * Extract path from full URL
 */
export function getPathFromUrl(url: string): string {
	try {
		const urlObj = new URL(url)
		return urlObj.pathname
	} catch {
		return url
	}
}
