import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import aboutImg from '../assets/about.png'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="sobre" className="section">
      <div className="container section-inner">
        <div className="about-grid">
          <Reveal className="about-photo-wrap">
            <div className="about-photo-glow" />
            <div className="about-photo-frame">
              <img src={aboutImg} alt="Foto de Izadora Freitas Oliveira" />
            </div>
            <div className="about-photo-tag">📍 {a.location}</div>
          </Reveal>

          <div>
            <Reveal>
              <div className="eyebrow">{a.eyebrow}</div>
              <h2 className="section-title">{a.title}</h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="about-text" style={{ marginTop: 26 }}>
                <p>{a.p1}</p>
                <p>{a.p2}</p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="about-stats">
                <div>
                  <div className="about-stat-n">{a.stat1n}</div>
                  <div className="about-stat-l">{a.stat1l}</div>
                </div>
                <div>
                  <div className="about-stat-n">{a.stat2n}</div>
                  <div className="about-stat-l">{a.stat2l}</div>
                </div>
                <div>
                  <div className="about-stat-n">{a.stat3n}</div>
                  <div className="about-stat-l">{a.stat3l}</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
