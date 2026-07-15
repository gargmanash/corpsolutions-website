import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import Logo from '../ui/Logo'
import { company } from '../../content/company'
import { servicesByPillar } from '../../content/services'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand col */}
          <div className={styles.brand}>
            <Logo variant="light" showTagline />
            <p className={styles.brandDesc}>
              A quality service provider in the area of Consultancy, Business Process Outsourcing and Recruitment
              — serving Insurance, Telecom and Banking sectors across India.
            </p>
            <a href={`mailto:${company.email}`} className={styles.brandEmail}>
              <Mail size={14} /> {company.email}
            </a>
          </div>

          {/* Services col */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            {(['consultancy', 'outsourcing', 'hr'] as const).map((pillar) => (
              <div key={pillar} className={styles.serviceGroup}>
                {servicesByPillar[pillar].map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className={styles.link}>
                    {s.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Quick links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/about" className={styles.link}>About Us</Link>
            <Link to="/clients" className={styles.link}>Clients</Link>
            <Link to="/career" className={styles.link}>Career</Link>
            <Link to="/contact" className={styles.link}>Contact</Link>
          </div>

          {/* Offices */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Offices</h4>
            {company.offices.map((o) => (
              <div key={o.type} className={styles.office}>
                <div className={styles.officeType}>{o.type}</div>
                <p className={styles.officeAddr}>
                  <MapPin size={12} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ whiteSpace: 'pre-line' }}>{o.address}</span>
                </p>
                <a href={`tel:${o.phone.replace(/\s/g, '')}`} className={styles.officeContact}>
                  <Phone size={12} /> {o.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} CorpSolutions Services Private Limited. All rights reserved.</p>
          <a href={`https://${company.website}`} className={styles.bottomLink} target="_blank" rel="noopener noreferrer">
            <Globe size={13} /> {company.website}
          </a>
        </div>
      </div>
    </footer>
  )
}
