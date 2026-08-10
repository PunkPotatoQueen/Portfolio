import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, width: '100%' }}>
        <span>{t.footer.built}</span>
        <span>© {year} Izadora Freitas Oliveira · {t.footer.rights}</span>
      </div>
    </footer>
  )
}
