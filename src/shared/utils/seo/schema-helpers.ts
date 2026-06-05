/**
 * Schema.org Structured Data Helpers
 * Generates JSON-LD schemas for Google entity recognition
 */

import {
	BRAND,
	COMPANY,
	PERSON,
	SITE,
	SKILLS,
	SOCIAL,
} from "~/shared/config/seo-constants"

/**
 * Organization Schema
 * Establishes "Dezen" as a brand entity
 * CRITICAL for preventing spell correction to "one pacman"
 */
export function generateOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE.url}/#organization`,
		name: BRAND.name, // "Dezen"
		alternateName: BRAND.legalName, // "Trung Tran Duy"
		url: SITE.url,
		logo: {
			"@type": "ImageObject",
			url: `${SITE.url}${COMPANY.logo}`,
			width: "512",
			height: "512",
		},
		description: COMPANY.description,
		foundingDate: COMPANY.foundingDate,
		founder: {
			"@type": "Person",
			"@id": `${SITE.url}/#person`,
			name: BRAND.legalName,
		},
		sameAs: SOCIAL.profiles,
		contactPoint: {
			"@type": "ContactPoint",
			contactType: COMPANY.contactPoint.contactType,
			email: COMPANY.contactPoint.email,
			telephone: COMPANY.contactPoint.telephone,
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: PERSON.location.locality,
			addressCountry: PERSON.location.country,
		},
	}
}

/**
 * WebSite Schema
 * Establishes the official website for "Dezen" brand
 * Helps Google understand site ownership and authority
 */
export function generateWebSiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE.url}/#website`,
		name: BRAND.name, // "Dezen"
		alternateName: SITE.siteName, // "Dezen Portfolio"
		url: SITE.url,
		description: BRAND.description,
		publisher: {
			"@id": `${SITE.url}/#organization`,
		},
		inLanguage: SITE.language,
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${SITE.url}/?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	}
}

/**
 * Person Schema (Enhanced)
 * Links personal identity to "Dezen" brand
 */
export function generatePersonSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${SITE.url}/#person`,
		name: BRAND.legalName, // "Trung Tran Duy"
		alternateName: BRAND.name, // "Dezen" - CRITICAL
		givenName: "Trung",
		familyName: "Tran Duy",
		description: BRAND.description,
		url: SITE.url,
		image: {
			"@type": "ImageObject",
			url: `${SITE.url}${PERSON.image}`,
			width: "1200",
			height: "630",
		},
		email: PERSON.email,
		telephone: PERSON.telephone,
		jobTitle: PERSON.jobTitle,
		worksFor: {
			"@type": "Organization",
			name: PERSON.worksFor,
		},
		knowsAbout: SKILLS.all,
		sameAs: SOCIAL.profiles,
		address: {
			"@type": "PostalAddress",
			addressLocality: PERSON.location.locality,
			addressCountry: PERSON.location.country,
		},
		brand: {
			"@id": `${SITE.url}/#organization`,
		},
	}
}

/**
 * ItemList Schema for Projects Portfolio
 * Structures project data for rich results
 */
interface ProjectItem {
	title: string
	description: string
	url?: string
	image?: string
}

export function generateItemListSchema(items: ProjectItem[]) {
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"@id": `${SITE.url}/#projects`,
		name: "Dezen Portfolio Projects",
		description: "Selected projects and work by Dezen",
		numberOfItems: items.length,
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "CreativeWork",
				name: item.title,
				description: item.description,
				url: item.url || SITE.url,
				image: item.image,
				creator: {
					"@id": `${SITE.url}/#person`,
				},
			},
		})),
	}
}

/**
 * BreadcrumbList Schema
 * Navigation hierarchy for SEO
 */
interface Breadcrumb {
	name: string
	url: string
}

export function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": `${SITE.url}/#breadcrumb`,
		itemListElement: breadcrumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@id": crumb.url,
				name: crumb.name,
			},
		})),
	}
}

/**
 * WebPage Schema
 * Enhanced page-level metadata
 */
interface WebPageOptions {
	title: string
	description: string
	url?: string
	datePublished?: string
	dateModified?: string
}

export function generateWebPageSchema(options: WebPageOptions) {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": options.url || SITE.url,
		name: options.title,
		description: options.description,
		url: options.url || SITE.url,
		isPartOf: {
			"@id": `${SITE.url}/#website`,
		},
		about: {
			"@id": `${SITE.url}/#person`,
		},
		author: {
			"@id": `${SITE.url}/#person`,
		},
		creator: {
			"@id": `${SITE.url}/#organization`,
		},
		publisher: {
			"@id": `${SITE.url}/#organization`,
		},
		datePublished: options.datePublished,
		dateModified: options.dateModified || new Date().toISOString(),
		inLanguage: SITE.language,
		mainEntity: {
			"@id": `${SITE.url}/#person`,
		},
	}
}

/**
 * Combine multiple schemas into one JSON-LD script
 * Google prefers separate schemas but accepts arrays
 */
export function combineSchemas(
	...schemas: Array<Record<string, unknown>>
): string {
	return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)
}

/**
 * Generate all core schemas for homepage
 * Returns array of schemas for easy injection
 */
export function generateCoreSchemas(projects?: ProjectItem[]): unknown[] {
	const schemas: unknown[] = [
		generateOrganizationSchema(),
		generateWebSiteSchema(),
		generatePersonSchema(),
	]

	if (projects && projects.length > 0) {
		schemas.push(generateItemListSchema(projects))
	}

	return schemas
}
