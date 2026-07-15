import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import { servicesByPillar, pillarMeta } from '../content/services'
import styles from './Services.module.css'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — CorpSolutions</title>
        <meta name="description" content="Consultancy, Outsourcing and HR Management services from CorpSolutions — your single-stop solution for Insurance, Telecom and Banking sectors." />
      </Helmet>

      <div className={styles.pageHero}>
        <div className="container">
          <Reveal><span className={styles.eyebrow}>Our Services</span></Reveal>
          <Reveal delay={0.08}><h1 className={styles.heroTitle}>Multiple solutions.<br />One trusted partner.</h1></Reveal>
          <Reveal delay={0.16}>
            <p className={styles.heroSub}>
              Our service suite encompasses all the elements of back office operations, finance, accounting and
              recruitment value chain — tailored specifically to meet your needs.
            </p>
          </Reveal>
        </div>
        <div className={styles.heroDiamond} aria-hidden="true" />
      </div>

      <section className="section">
        <div className="container">
          {(['consultancy', 'outsourcing', 'hr'] as const).map((pillar, pi) => {
            const meta = pillarMeta[pillar]
            const pillarServices = servicesByPillar[pillar]
            return (
              <div key={pillar} className={styles.pillarBlock}>
                <Reveal>
                  <div className={styles.pillarHeader} style={{ '--pillar-color': meta.color } as React.CSSProperties}>
                    <div className={styles.pillarDiamond} aria-hidden="true" />
                    <div>
                      <div className={styles.pillarEyebrow}>Pillar 0{pi + 1}</div>
                      <h2 className={styles.pillarTitle} style={{ color: meta.color }}>{meta.label}</h2>
                    </div>
                  </div>
                </Reveal>
                <div className={styles.pillarGrid}>
                  {pillarServices.map((s, i) => (
                    <Reveal key={s.slug} delay={i * 0.08}>
                      <Link
                        to={`/services/${s.slug}`}
                        className={styles.card}
                        style={{ '--pillar-color': meta.color, '--pillar-soft': meta.softColor } as React.CSSProperties}
                      >
                        <h3 className={styles.cardName}>{s.name}</h3>
                        <p className={styles.cardDesc}>{s.shortDesc}</p>
                        <span className={styles.cardLink}>
                          Learn more <ArrowRight size={14} />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
