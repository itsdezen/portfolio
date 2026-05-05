"use client"

import { createFileRoute } from "@tanstack/react-router"
import {
	AboutSectionNew,
	aboutData,
	ContactSectionNew,
	contactData,
	ExperienceSection,
	experiences,
	FooterNew,
	HeroSection,
	NavigationNew,
	OSSSection,
	ossPackages,
	ProjectsSectionNew,
	projects,
	SkillsSection,
	skillCategories,
} from "~/modules/portfolio"

export const Route = createFileRoute("/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<NavigationNew />
			<main>
				<HeroSection />
				<AboutSectionNew about={aboutData} />
				<ProjectsSectionNew projects={projects} />
				<OSSSection packages={ossPackages} />
				<SkillsSection categories={skillCategories} />
				<ExperienceSection experiences={experiences} />
				<ContactSectionNew contact={contactData} />
			</main>
			<FooterNew />
		</>
	)
}
