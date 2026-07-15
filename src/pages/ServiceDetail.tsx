import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { services, pillarMeta } from '../content/services'
import styles from './ServiceDetail.module.css'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const meta = pillarMeta[service.pillar]
  const pillarServices = services.filter((s) => s.pillar === service.pillar && s.slug !== slug)

  return (
    <>
      <Helmet>
        <title>{service.name} — CorpSolutions</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      {/* Hero */}
      <div
        className={styles.pageHero}
        style={{ '--pillar-color': meta.color, '--pillar-soft': meta.softColor } as React.CSSProperties}
      >
        <div className="container">
          <Reveal>
            <Link to="/services" className={styles.back}>
              <ArrowLeft size={15} /> Services
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <span className={styles.pillarChip}>{meta.label}</span>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className={styles.heroTitle}>{service.name}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className={styles.heroSub}>{service.shortDesc}</p>
          </Reveal>
        </div>
        <div className={styles.heroDiamond} aria-hidden="true" />
      </div>

      <section className={`section ${styles.body}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Main content */}
            <div className={styles.main}>
              {service.intro.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className={styles.introPara}>{p}</p>
                </Reveal>
              ))}

              {service.bulletGroups.map((group, gi) => (
                <Reveal key={gi} delay={gi * 0.08}>
                  <div className={styles.bulletGroup}>
                    {group.heading && (
                      <h3 className={styles.groupHeading} style={{ color: meta.color }}>{group.heading}</h3>
                    )}
                    <ul className={styles.bullets}>
                      {group.items.map((item, ii) => (
                        <li key={ii} className={styles.bullet}>
                          <CheckCircle2 size={16} style={{ color: meta.color, flexShrink: 0, marginTop: 3 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.2}>
                <div className={styles.cta}>
                  <Button to="/contact" size="lg">
                    Enquire About This Service <ArrowRight size={18} />
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sideCard} style={{ '--pillar-color': meta.color } as React.CSSProperties}>
                <h4 className={styles.sideTitle}>More in {meta.label}</h4>
                {pillarServices.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className={styles.sideLink}>
                    {s.name} <ArrowRight size={13} />
                  </Link>
                ))}
              </div>
              <div className={styles.sideContact}>
                <p className={styles.sideContactText}>Ready to get started?</p>
                <Button to="/contact" variant="ghost" size="sm">Contact Us</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
