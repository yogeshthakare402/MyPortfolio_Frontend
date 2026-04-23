import Image from "next/image";
import Container from "@/Components/container";
import type { SocialLink } from "@/data/portfolio-data";

type HeroProps = {
  name: string;
  role: string;
  lead: string;
  location: string;
  availability: string;
  avatar: string;
  socials: SocialLink[];
  resume: string;
  quickFacts: readonly string[];
  heroStats: readonly { label: string; value: string }[];
};

export default function Hero({
  name,
  role,
  lead,
  location,
  availability,
  avatar,
  socials,
  resume,
  quickFacts,
  heroStats,
}: HeroProps) {
  return (
    <section className="hero" id="top">
      <Container className="hero-grid">
        <div className="hero-content">
          <p className="eyebrow">{role}</p>
          <h1>{name}</h1>
          <p className="lead">{lead}</p>
          <div className="hero-meta">
            <span>{location}</span>
            <span>{availability}</span>
          </div>
          <ul className="hero-facts">
            {quickFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={resume} className="btn btn-secondary" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
          <div className="social-row">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
          <div className="hero-stats" aria-label="Career highlights">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <p>{stat.value}</p>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-glow" aria-hidden="true" />
          <Image
            src={avatar}
            alt={name}
            width={460}
            height={460}
            priority
            sizes="(max-width: 768px) 75vw, 460px"
            className="hero-image"
          />
        </div>
      </Container>
    </section>
  );
}
