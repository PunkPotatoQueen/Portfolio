import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const EMAIL = 'izadorafreitaseng@gmail.com'
const PHONE = '(81) 99743-4085'
const LINKEDIN = 'https://www.linkedin.com/in/izadora-freitas-oliveira/'
const RESUME_PATH = '/curriculo-izadora-freitas.pdf'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contato via portfólio — ${form.name || ''}`)
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contato" className="section">
      <div className="container section-inner">
        <Reveal>
          <div className="eyebrow">{c.eyebrow}</div>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-subtitle">{c.desc}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-panel">
            <div className="contact-links">
              <a className="contact-link-row" href={`mailto:${EMAIL}`}>
                <div>
                  <div className="contact-link-label">{c.emailLabel}</div>
                  <div className="contact-link-value">{EMAIL}</div>
                </div>
                <span className="contact-arrow">↗</span>
              </a>
              <a className="contact-link-row" href={`tel:+5581997434085`}>
                <div>
                  <div className="contact-link-label">{c.phoneLabel}</div>
                  <div className="contact-link-value">{PHONE}</div>
                </div>
                <span className="contact-arrow">↗</span>
              </a>
              <a className="contact-link-row" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <div>
                  <div className="contact-link-label">{c.linkedinLabel}</div>
                  <div className="contact-link-value">/izadora-freitas-oliveira</div>
                </div>
                <span className="contact-arrow">↗</span>
              </a>
              <a className="contact-link-row" href={RESUME_PATH} target="_blank" rel="noopener noreferrer" download>
                <div>
                  <div className="contact-link-label">PDF</div>
                  <div className="contact-link-value">{c.resumeLabel}</div>
                </div>
                <span className="contact-arrow">↓</span>
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={c.formName}
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={c.formEmail}
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder={c.formMessage}
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                {c.formSend}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
