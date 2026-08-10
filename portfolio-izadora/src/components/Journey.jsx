import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function Journey() {
  const { t } = useLanguage()
  const j = t.journey

  return (
    <section id="trajetoria" className="section">
      <div className="container section-inner">
        <Reveal>
          <div className="eyebrow">{j.eyebrow}</div>
          <h2 className="section-title">{j.title}</h2>
        </Reveal>

        <div className="timeline">
          {j.items.map((item, i) => (
            <Reveal key={item.title + item.date} delay={i * 40} as="article" className="timeline-item">
              <div className="timeline-date">{item.date}</div>
              <div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-org">{item.org}</div>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="courses-title">{j.coursesTitle}</div>
        </Reveal>
        <div className="courses-grid">
          {j.courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 40} as="div" className="course-card">
              <div className="course-card-title">{c.title}</div>
              <div className="course-card-org">{c.org}</div>
              <p className="course-card-desc">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
