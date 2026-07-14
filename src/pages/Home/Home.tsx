import HeroSection from './Section/HeroSection'
import ProjectSection from './Section/ProjectSection'
import SkillsSection from './Section/SkillsSection'
import WorkExperienceSection from './Section/WorkExperienceSection'
import OrganizationExperienceSection from './Section/OrganizationExperienceSection'
import CertificationSection from './Section/CertificationSection'
import ContactSection from './Section/ContactSection'

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProjectSection />
			<SkillsSection />
			<WorkExperienceSection />
			<OrganizationExperienceSection />
			<CertificationSection />
			<ContactSection />
		</>
	)
}

