
import { useState, useEffect } from "react"
import { data } from "../../assets/data"
import "./index.css"

export default function Portfolio() {
  const { portfolio } = data
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState(portfolio.projects)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const portfolioSection = document.querySelector("#portfolio")
    if (portfolioSection) {
      observer.observe(portfolioSection)
    }

    return () => {
      if (portfolioSection) {
        observer.unobserve(portfolioSection)
      }
    }
  }, [])

  useEffect(() => {
    if (filter === "all") {
      setProjects(portfolio.projects)
    } else if (filter === "featured") {
      setProjects(portfolio.projects.filter((project) => project.featured))
    }
  }, [filter, portfolio.projects])

  // Get unique technologies from all projects
  const allTechnologies = [...new Set(portfolio.projects.flatMap((project) => project.technologies || []))]
  console.log("allTechnologies", allTechnologies)

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-title">
          <h2>{portfolio.title}</h2>
          <div className="underline"></div>
        </div>

        <div className="portfolio-filters">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === "featured" ? "active" : ""}`}
            onClick={() => setFilter("featured")}
          >
            Featured
          </button>
        </div>

        <div className={`portfolio-grid ${isVisible ? "visible" : ""}`}>
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="portfolio-img">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <div className="project-tech">
                    {project.technologies &&
                      project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    {project.technologies && project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn view-btn">
                      Live Demo
                    </a>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical drawing elements */}
      <div className="technical-drawing drawing-3"></div>
      <div className="technical-drawing drawing-4"></div>
    </section>
  )
}
