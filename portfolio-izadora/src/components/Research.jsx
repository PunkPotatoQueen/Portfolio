import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function Research() {
  const { t } = useLanguage()
  const r = t.research

  return (
    <section id="tcc" className="section">
      <div className="container section-inner">
        <Reveal>
          <div className="eyebrow">{r.eyebrow}</div>
          <h2 className="section-title">{r.title}</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="research-panel">
            <div>
              <p className="research-desc">{r.desc}</p>
              <p className="research-method">→ {r.method}</p>
              <p className="research-desc" style={{ marginTop: 18 }}>{r.conclusion}</p>
            </div>
            <div className="research-stats">
              <div className="research-stat">
                <div className="research-stat-n">{r.stat1n}</div>
                <div className="research-stat-l">{r.stat1l}</div>
              </div>
              <div className="research-stat">
                <div className="research-stat-n">{r.stat2n}</div>
                <div className="research-stat-l">{r.stat2l}</div>
              </div>
              <div className="research-stat">
                <div className="research-stat-n">{r.stat3n}</div>
                <div className="research-stat-l">{r.stat3l}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
