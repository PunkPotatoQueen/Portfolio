import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const LANGUAGES = [
  'Python', 'JavaScript', 'Dart', 'Flutter', 'React', 'Node.js',
  'HTML / CSS', 'Spring Boot', 'SQL', 'ESP32 / IoT',
]

export default function Skills() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <section id="stack" className="section">
      <div className="container section-inner">
        <Reveal>
          <div className="eyebrow">{s.eyebrow}</div>
          <h2 className="section-title">{s.title}</h2>
        </Reveal>

        <div className="skills-wrap">
          <Reveal delay={80}>
            <div className="skills-group-label">{s.groupsTitle.languages}</div>
            <div className="skill-tags">
              {LANGUAGES.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="skills-group-label">{s.groupsTitle.areas}</div>
            <div className="skill-tags">
              {s.areas.map((area) => (
                <span className="skill-tag area" key={area}>{area}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
