
import { useEffect, useRef, useState } from "react"
import { data } from "../../assets/data"
import "./index.css"

export default function Skills() {
  const { skills } = data.personalInfo
  const skillsRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools & DevOps" },
    { id: "languages", name: "Languages" },
  ]

  const filteredSkills =
    activeCategory === "all" ? skills.technical : skills.technical.filter((skill) => skill.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll(".progress-bar")
            progressBars.forEach((bar, index) => {
              const skillIndex = Array.from(document.querySelectorAll(".skill-item")).indexOf(
                bar.closest(".skill-item"),
              )
              if (skillIndex >= 0 && filteredSkills[skillIndex]) {
                const width = filteredSkills[skillIndex].proficiency
                setTimeout(() => {
                  bar.style.width = `${width}%`
                  bar.classList.add("animate")
                }, index * 100)
              }
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [filteredSkills])

  const getSkillIcon = (skillName) => {
    const icons = {
      JavaScript: "💻",
      "React.js": "⚛️",
      "HTML5/CSS3": "🌐",
      "Node.js": "🖥️",
      "Express.js": "🚀",
      MongoDB: "🗄️",
      "RESTful APIs": "🔌",
      "Git/GitHub": "📊",
      "Responsive Design": "📱",
      Redux: "🔄",
      TypeScript: "📘",
      SQL: "🗃️",
    }

    return icons[skillName] || "🔧"
  }

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="skills-container" ref={skillsRef}>
          {filteredSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <h4 className="skill-name">
                  <span className="skill-icon">{getSkillIcon(skill.name)}</span>
                  {skill.name}
                </h4>
                <h4 className="skill-percent">{skill.proficiency}%</h4>
              </div>
              <div className="progress-line">
                <div className="progress-bar" data-percent={skill.proficiency}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <h3 className="soft-skills-title">Soft Skills</h3>
          <div className="soft-skills-container">
            {skills.softSkills.map((skill, index) => (
              <div className="soft-skill-item" key={index}>
                <span className="soft-skill-icon">🔹</span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical drawing elements */}
      <div className="technical-drawing drawing-1"></div>
      <div className="technical-drawing drawing-2"></div>
    </section>
  )
}
