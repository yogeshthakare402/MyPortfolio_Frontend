import { data } from "../../assets/data"
import "./index.css"

export default function About() {
  const { personalInfo } = data
  const { details, education, experience } = personalInfo

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>{personalInfo.about}</p>
            <ul className="highlights">
              {personalInfo.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="personal-info">
            <h3>Personal Details</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Birthday:</span>
                <span className="info-value">{details.birthday}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Age:</span>
                <span className="info-value">{details.age}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Degree:</span>
                <span className="info-value">{details.degree}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{details.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <span className="info-value">{details.phone[0]}</span>
              </div>
              <div className="info-item">
                <span className="info-label">City:</span>
                <span className="info-value">{details.city}</span>
              </div>
            </div>
            <div className="resume-btn">
              <a href={details.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn primary-btn">
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-container">
            <div className="timeline-header">
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p className="timeline-date">{edu.duration}</p>
                    <p>{edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-header">
              <h3>Experience</h3>
            </div>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{exp.position}</h4>
                    <h5>{exp.company}</h5>
                    <p className="timeline-date">{exp.duration}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
