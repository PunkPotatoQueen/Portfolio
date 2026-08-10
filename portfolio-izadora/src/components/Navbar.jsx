import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import barsIcon from '../assets/bars-icon.png'
import xmarkIcon from '../assets/xmark-icon.png'

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#sobre', label: t.nav.about },
    { href: '#stack', label: t.nav.skills },
    { href: '#projetos', label: t.nav.projects },
    { href: '#sites', label: t.nav.web },
    { href: '#tcc', label: t.nav.research },
    { href: '#trajetoria', label: t.nav.journey },
    { href: '#contato', label: t.nav.contact },
  ]

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#topo" className="logo">
            <span className="logo-mark">IF</span>
            Izadora
          </a>

          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="nav-right">
            <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
              {lang === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
            </button>
            <button
              className="menu-toggle"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <img src={open ? xmarkIcon : barsIcon} alt="" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
