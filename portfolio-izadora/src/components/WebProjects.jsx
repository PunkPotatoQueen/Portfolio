import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import eyeIcon from '../assets/eye-icon.png'

export default function WebProjects() {
  const { t } = useLanguage()
  const w = t.web

  return (
    <section id="sites" className="section">
      <div className="container section-inner">
        <Reveal>
          <div className="eyebrow">{w.eyebrow}</div>
          <h2 className="section-title">{w.title}</h2>
          <p className="section-subtitle">{w.subtitle}</p>
        </Reveal>

        <div className="card-grid">
          {w.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 100}>
              <article className="project-card">
                <span className="pill">{item.tag}</span>
                <h3 className="project-card-title">{item.title}</h3>
                <p className="project-card-desc">{item.desc}</p>
                <a
                  className="project-link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={eyeIcon} alt="" className="icon-img" />
                  {w.viewLive}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
