
import { useState } from "react";
import emailjs from '@emailjs/browser'
import { data } from "../../assets/data"
import "./index.css"

export default function Contact() {
  const { contact } = data.personalInfo
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({
      message: "",
      isError: false,
      isSubmitting: true,
    })
  
    emailjs.send(
      "service_sjrmk5c",
      "template_u2709ao", //template key
      formData,
      "-T8P4aIDMvD59J7nJ" //public key
    )
      .then((response) => {
        setFormStatus({
          message: "Thank you! Your message has been sent successfully.",
          isError: false,
          isSubmitting: false,
        })
        setFormData({
          user_name: "",
          user_email: "",
          subject: "",
          message: "",
        })
      })
      .catch((error) => {
        setFormStatus({
          message: "Oops! Something went wrong. Please try again.",
          isError: true,
          isSubmitting: false,
        })
        console.error("EmailJS Error:", error)
      })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>{contact.title}</h2>
          <div className="underline"></div>
          <p>{contact.subtitle}</p>
        </div>

        <div className="contact-tagline">
          <h3>{contact.tagline}</h3>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            {contact.contactMethods.map((method, index) => (
              <div className="contact-item" key={index}>
                <div className="contact-icon">
                  {method.type === "phone" ? (
                    <i className="icon-phone">📞</i>
                  ) : method.type === "email" ? (
                    <i className="icon-email">✉️</i>
                  ) : method.type === "linkedin" ? (
                    <i className="icon-linkedin">👔</i>
                  ) : (
                    <i className="icon-github">💻</i>
                  )}
                </div>
                <div className="contact-text">
                  <h4>{method.title}</h4>
                  {method.link ? (
                    <a href={method.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                      {method.value}
                    </a>
                  ) : (
                    <p>{method.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="email-section">
              <h3>{contact.emailSection.title}</h3>
              <p>{contact.emailSection.subtitle}</p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              {contact.emailService.formFields.map((field, index) => (
                <div className="form-group" key={index}>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={field.rows}
                      cols={field.cols}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="btn submit-btn" disabled={formStatus.isSubmitting}>
                {formStatus.isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {formStatus.message && (
                <div className={`form-message ${formStatus.isError ? "error" : "success"}`}>{formStatus.message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
