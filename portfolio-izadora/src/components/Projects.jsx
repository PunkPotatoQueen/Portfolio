import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import codeIcon from '../assets/code-icon.png'

export default function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section id="projetos" className="section">
      <div className="container section-inner">
        <Reveal>
          <div className="eyebrow">{p.eyebrow}</div>
          <h2 className="section-title">{p.title}</h2>
          <p className="section-subtitle">{p.subtitle}</p>
        </Reveal>

        <div className="card-grid projects-grid">
          {p.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <article className="project-card">
                <span className="pill">{item.tag}</span>
                <h3 className="project-card-title">{item.title}</h3>
                <p className="project-card-desc">{item.desc}</p>
                <div className="project-stack">
                  {item.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                {item.link ? (
                  <a
                    className="project-link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={codeIcon} alt="" className="icon-img" />
                    {p.viewCode}
                  </a>
                ) : (
                  <span className="project-link disabled">
                    <img src={codeIcon} alt="" className="icon-img" style={{ opacity: 0.4 }} />
                    {p.noRepo}
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
