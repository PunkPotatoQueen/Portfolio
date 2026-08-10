import { useLanguage } from '../i18n/LanguageContext'
import heroImg from '../assets/hero.png'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="topo" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <span className="dot" />
              {t.hero.badge}
            </div>
            <div className="eyebrow">{t.hero.eyebrow}</div>
            <h1 className="hero-title">
              {t.hero.title1}
              <br />
              <span className="line2">{t.hero.title2}</span>
            </h1>
            <p className="hero-tagline">{t.hero.tagline}</p>
            <div className="hero-cta">
              <a href="#projetos" className="btn btn-primary">{t.hero.cta1}</a>
              <a href="#contato" className="btn btn-ghost">{t.hero.cta2}</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit" />
            <div className="hero-orbit orbit-2" />
            <span className="hero-star" style={{ width: 6, height: 6, top: '12%', left: '18%' }} />
            <span className="hero-star" style={{ width: 4, height: 4, top: '70%', left: '10%', animationDelay: '0.8s' }} />
            <span className="hero-star" style={{ width: 5, height: 5, top: '20%', left: '85%', animationDelay: '1.4s' }} />
            <span className="hero-star" style={{ width: 3, height: 3, top: '80%', left: '80%', animationDelay: '0.4s' }} />
            <div className="hero-rocket-wrap">
              <img src={heroImg} alt="Ilustração de um foguete rosa" />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>{t.hero.scroll}</span>
        <span className="scroll-cue-line" />
      </div>
    </section>
  )
}
