import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { servicesByPillar } from '../../content/services'
import styles from './Header.module.css'

const pillars = [
  { key: 'consultancy', label: 'Consultancy', cls: styles.consultancy },
  { key: 'outsourcing', label: 'Outsourcing', cls: styles.outsourcing },
  { key: 'hr', label: 'HR Management', cls: styles.hr },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setMenuOpen(false) }, [location])

  useEffect(() => {
    if (!menuOpen) return
    const handle = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [menuOpen])

  const transparent = isHome && !scrolled

  return (
    <>
      <header className={[styles.header, transparent ? styles.transparent : styles.scrolled].join(' ')}>
        <div className={`container ${styles.inner}`}>
          <Link to="/" aria-label="CorpSolutions home">
            <Logo variant={transparent ? 'light' : 'dark'} showTagline={!scrolled} />
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Main">
            <NavLink to="/" className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}>
              About
            </NavLink>

            {/* Services mega menu */}
            <div className={styles.megaWrap} ref={menuRef}>
              <button
                className={[styles.navLink, location.pathname.startsWith('/services') ? styles.active : ''].join(' ')}
                aria-expanded={menuOpen}
                aria-haspopup="true"
                onClick={() => setMenuOpen((v) => !v)}
              >
                Services <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: menuOpen ? 'rotate(180deg)' : 'none' }} />
              </button>
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    className={styles.megaPanel}
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {pillars.map((p) => (
                      <div key={p.key} className={[styles.megaCol, p.cls].join(' ')}>
                        <h3>{p.label}</h3>
                        {servicesByPillar[p.key].map((s) => (
                          <Link key={s.slug} to={`/services/${s.slug}`} className={styles.megaServiceLink}>
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/clients" className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}>
              Clients
            </NavLink>
            <NavLink to="/career" className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}>
              Career
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}>
              Contact
            </NavLink>
          </nav>

          <Button to="/contact" size="sm" className={styles.ctaBtn}>
            Get in Touch
          </Button>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileDrawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mobileHeader}>
              <Logo variant="dark" showTagline={false} />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className={styles.mobileNav} aria-label="Mobile">
              <Link to="/" className={styles.mobileNavLink}>Home</Link>
              <Link to="/about" className={styles.mobileNavLink}>About</Link>
              <div style={{ paddingTop: 'var(--space-4)' }}>
                {pillars.map((p) => (
                  <div key={p.key} className={styles.mobileGroup}>
                    <div className={[styles.mobileGroupTitle, p.cls].join(' ')}>{p.label}</div>
                    {servicesByPillar[p.key].map((s) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className={styles.mobileServiceLink}>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <Link to="/clients" className={styles.mobileNavLink}>Clients</Link>
              <Link to="/career" className={styles.mobileNavLink}>Career</Link>
              <Link to="/contact" className={styles.mobileNavLink}>Contact</Link>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <Button to="/contact" size="lg">Get in Touch</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
