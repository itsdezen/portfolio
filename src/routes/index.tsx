"use client"

import { createFileRoute } from "@tanstack/react-router"
import {
	AboutSection,
	aboutData,
	ContactSection,
	contactData,
	ExperienceSection,
	experiences,
	Footer,
	HeroSection,
	Navigation,
	OSSSection,
	ossPackages,
	ProjectsSection,
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
			<Navigation />
			<main>
				<HeroSection />
				<AboutSection about={aboutData} />
				<ProjectsSection projects={projects} />
				<OSSSection packages={ossPackages} />
				<SkillsSection categories={skillCategories} />
				<ExperienceSection experiences={experiences} />
				<ContactSection contact={contactData} />
			</main>
			<Footer />
		</>
	)
}
