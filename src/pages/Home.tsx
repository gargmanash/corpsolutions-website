import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Building2, Users, BarChart3 } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { company } from '../content/company'
import { services, servicesByPillar, pillarMeta } from '../content/services'
import { clients } from '../content/clients'
import { about } from '../content/about'
import styles from './Home.module.css'

const pillarIcons = { consultancy: BarChart3, outsourcing: Building2, hr: Users }

export default function Home() {
  return (
    <>
      <Helmet>
        <title>CorpSolutions — Consultancy · Outsourcing · Recruitment</title>
        <meta name="description" content={company.heroSub} />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgGradient} />
          <div className={styles.heroDiamond1} />
          <div className={styles.heroDiamond2} />
          <div className={styles.heroDiamond3} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className={styles.heroEyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {company.tagline}
            </motion.div>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              We aim to render our clients such a service to enable them{' '}
              <span className={styles.heroAccent}>achieve their business goals.</span>
            </motion.h1>

            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {company.heroSub}
            </motion.p>

            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button to="/services" size="lg">
                Our Services <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="ghost" size="lg">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Sector chips */}
          <motion.div
            className={styles.heroSectors}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {company.sectors.map((s) => (
              <span key={s} className={styles.sectorChip}>{s}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── THREE PILLARS ────────────────────────────────────── */}
      <section className={`section ${styles.pillars}`}>
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Three pillars, one trusted partner."
            intro="CorpSolutions provides multiple solutions at a single stop — tailored specifically to meet your organisation's needs."
            align="center"
          />
          <div className={styles.pillarsGrid}>
            {(['consultancy', 'outsourcing', 'hr'] as const).map((p, i) => {
              const meta = pillarMeta[p]
              const Icon = pillarIcons[p]
              return (
                <Reveal key={p} delay={i * 0.12}>
                  <Link to="/services" className={styles.pillarCard} style={{ '--pillar-color': meta.color, '--pillar-soft': meta.softColor } as React.CSSProperties}>
                    <div className={styles.pillarIcon}>
                      <Icon size={28} />
                    </div>
                    <h3 className={styles.pillarTitle}>{meta.label}</h3>
                    <ul className={styles.pillarServices}>
                      {servicesByPillar[p].map((s) => (
                        <li key={s.slug}>{s.name}</li>
                      ))}
                    </ul>
                    <span className={styles.pillarCta}>View services <ArrowRight size={14} /></span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <SectionHeading eyebrow="All Services" title="Everything you need under one roof." align="center" />
          <div className={styles.servicesGrid}>
            {services.map((s, i) => {
              const meta = pillarMeta[s.pillar]
              return (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link to={`/services/${s.slug}`} className={styles.serviceCard} style={{ '--pillar-color': meta.color } as React.CSSProperties}>
                    <span className={styles.serviceCardPillar}>{s.pillarLabel}</span>
                    <h4 className={styles.serviceCardName}>{s.name}</h4>
                    <p className={styles.serviceCardDesc}>{s.shortDesc}</p>
                    <span className={styles.serviceCardLink}>Learn more <ArrowRight size={13} /></span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CORPSOLUTIONS ────────────────────────────────── */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyInner}>
            <div className={styles.whyLeft}>
              <SectionHeading
                eyebrow="Why CorpSolutions"
                title="20 reasons to partner with us."
                intro="CorpSolutions team consists of highly skilled professionals who bring rich experience from different industries. We would like our clients to experience us as a 'Trustworthy' partner in their business."
              />
              <Button to="/about" variant="outline" size="md" className={styles.whyBtn}>
                Full story <ArrowRight size={15} />
              </Button>
            </div>
            <div className={styles.whyRight}>
              {about.whyReasons.slice(0, 10).map((r, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className={styles.whyReason}>
                    <CheckCircle2 size={16} className={styles.whyIcon} />
                    <span>{r}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS STRIP ────────────────────────────────────── */}
      <section className={`section ${styles.clientsSection}`}>
        <div className="container">
          <Reveal>
            <p className={styles.clientsLabel}>Trusted by leading organisations across India</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={styles.clientsStrip}>
              {clients.map((c) => (
                <div key={c.name} className={styles.clientChip}>{c.name}</div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className={styles.clientsAction}>
              <Button to="/clients" variant="outline">View all clients</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className="container">
          <Reveal>
            <h2 className={styles.ctaTitle}>Ready to streamline your operations?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.ctaSub}>Talk to our team — we'll tailor a solution to your business needs.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className={styles.ctaActions}>
              <Button to="/contact" size="lg">Contact Us <ArrowRight size={18} /></Button>
              <a href={`mailto:${company.email}`} className={styles.ctaEmail}>{company.email}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
