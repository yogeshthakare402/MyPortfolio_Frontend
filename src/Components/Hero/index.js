
import { useEffect, useRef } from "react"
import { data } from "../../assets/data"
import "./index.css"

export default function Hero() {
    const { personalInfo } = data
    const { home } = personalInfo
    const typingRef = useRef(null)

    useEffect(() => {
        // Update the roles array to remove "Mechanical Engineer" and add more software-focused roles
        const roles = ["Full Stack Developer", "Software Engineer", "Problem Solver"]
        let roleIndex = 0
        let charIndex = 0
        let isDeleting = false
        let typingSpeed = 100

        const type = () => {
            const currentRole = roles[roleIndex]

            if (isDeleting) {
                typingRef.current.textContent = currentRole.substring(0, charIndex - 1)
                charIndex--
                typingSpeed = 50
            } else {
                typingRef.current.textContent = currentRole.substring(0, charIndex + 1)
                charIndex++
                typingSpeed = 150
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true
                typingSpeed = 1500 // Pause at the end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false
                roleIndex = (roleIndex + 1) % roles.length
                typingSpeed = 500 // Pause before typing next role
            }

            setTimeout(type, typingSpeed)
        }

        setTimeout(type, 1000)
    }, [])

    const handleScrollToSection = (e, sectionId) => {
        e.preventDefault()

        const section = document.getElementById(sectionId)

        if (section) {
            const sectionTop = section.getBoundingClientRect().top
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const targetScrollPosition = scrollTop + sectionTop

            window.scrollTo({
                top: targetScrollPosition,
                behavior: "smooth",
            })
        }
    }

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="greeting">{home.greeting}</p>
                        <h1 className="name">{personalInfo.name}</h1>
                        <div className="typing-container">
                            <span>{home.introduction} </span>
                            <span ref={typingRef} className="typing-text"></span>
                            <span className="cursor">|</span>
                        </div>
                        <p className="description">{home.description}</p>
                        <div className="cta-buttons">
                            <a href="#about" className="btn primary-btn" onClick={(e) => handleScrollToSection(e, "about")}>
                                {home.ctaButton.text}
                            </a>
                            <a href="#contact" className="btn secondary-btn" onClick={(e) => handleScrollToSection(e, "contact")}>
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-container">
                            <img src={home.profileImage || "/placeholder.svg"} alt={personalInfo.name} />
                        </div>
                    </div>
                </div>
                <div className="scroll-down" onClick={(e) => handleScrollToSection(e, "about")}>
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div>
                        <span className="scroll-text">Scroll Down</span>
                    </div>
                </div>
            </div>

            {/* Technical drawing lines */}
            <div className="technical-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
            </div>
        </section>
    )
}
