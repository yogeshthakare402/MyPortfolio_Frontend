
import { useState, useEffect } from "react"
import "./index.css"

export default function Header({ activeSection }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleNavClick = (e, sectionId) => {
        e.preventDefault()
        setMenuOpen(false)
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
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="container header-container">
                <div className="logo">
                    <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
                        YT
                    </a>
                </div>

                <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li>
                            <a
                                href="#home"
                                className={activeSection === "home" ? "active" : ""}
                                onClick={(e) => handleNavClick(e, "home")}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className={activeSection === "about" ? "active" : ""}
                                onClick={(e) => handleNavClick(e, "about")}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className={activeSection === "skills" ? "active" : ""}
                                onClick={(e) => handleNavClick(e, "skills")}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                className={activeSection === "portfolio" ? "active" : ""}
                                onClick={(e) => handleNavClick(e, "portfolio")}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={activeSection === "contact" ? "active" : ""}
                                onClick={(e) => handleNavClick(e, "contact")}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
