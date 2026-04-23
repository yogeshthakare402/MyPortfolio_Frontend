import Container from "@/Components/container";
import SectionTitle from "@/Components/section-title";
import Hero from "@/features/home/components/hero";
import Header from "@/features/home/components/header";
import Skills from "@/features/home/components/skills";
import ExperienceTimeline from "@/features/home/components/experience";
import { getFeaturedProjects } from "@/features/projects/lib/get-projects";
import ProjectGrid from "@/features/projects/components/project-grid";
import { portfolioData } from "@/data/portfolio-data";

export const revalidate = 3600;

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <Header navItems={portfolioData.navItems} />
      <main>
        <Hero
          name={portfolioData.profile.name}
          role={portfolioData.profile.role}
          lead={portfolioData.profile.heroLead}
          location={portfolioData.profile.location}
          availability={portfolioData.profile.availability}
          avatar={portfolioData.profile.avatar}
          socials={portfolioData.socials}
          resume={portfolioData.profile.resume}
          quickFacts={portfolioData.profile.quickFacts}
          heroStats={portfolioData.profile.heroStats}
        />

        <section id="about" className="section">
          <Container>
            <SectionTitle title={portfolioData.about.title} />
            <div className="about-layout glass-card">
              <p className="about-copy">{portfolioData.about.intro}</p>
              <ul className="about-highlights">
                {portfolioData.about.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section id="projects" className="section section-alt">
          <Container>
            <SectionTitle
              title={portfolioData.sections.projects.title}
              subtitle={portfolioData.sections.projects.subtitle}
            />
            <ProjectGrid projects={featuredProjects} />
            <div className="section-cta-row">
              <a href="/projects" className="btn btn-secondary">
                {portfolioData.sections.projects.ctaLabel}
              </a>
            </div>
          </Container>
        </section>

        <section id="skills" className="section">
          <Container>
            <SectionTitle title={portfolioData.sections.skills.title} subtitle={portfolioData.sections.skills.subtitle} />
            <Skills groups={[...portfolioData.skills]} />
          </Container>
        </section>

        <section id="experience" className="section section-alt">
          <Container>
            <SectionTitle
              title={portfolioData.sections.experience.title}
              subtitle={portfolioData.sections.experience.subtitle}
            />
            <ExperienceTimeline items={[...portfolioData.experience]} />
          </Container>
        </section>
      </main>
    </>
  );
}
