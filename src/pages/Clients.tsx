import { Helmet } from 'react-helmet-async'
import Reveal from '../components/ui/Reveal'
import { clients, clientsDisclaimer } from '../content/clients'
import styles from './Clients.module.css'

const sectorLabels = { insurance: 'Insurance', banking: 'Banking', telecom: 'Telecom', other: 'Others' }

export default function Clients() {
  const sectors = ['insurance', 'banking', 'telecom', 'other'] as const

  return (
    <>
      <Helmet>
        <title>Clients — CorpSolutions</title>
        <meta name="description" content="CorpSolutions serves leading organisations across Insurance, Banking and Telecom including Reliance, HDFC Bank, Tata AIG, Airtel, Vodafone and more." />
      </Helmet>

      <div className={styles.pageHero}>
        <div className="container">
          <Reveal><span className={styles.eyebrow}>Our Clients</span></Reveal>
          <Reveal delay={0.08}><h1 className={styles.heroTitle}>Trusted by India's leading organisations.</h1></Reveal>
          <Reveal delay={0.16}>
            <p className={styles.heroSub}>
              We consistently deliver across Insurance, Telecom and Banking — building long-term partnerships
              with some of India's most recognised brands.
            </p>
          </Reveal>
        </div>
        <div className={styles.heroDiamond} aria-hidden="true" />
      </div>

      <section className="section">
        <div className="container">
          {sectors.map((sector) => {
            const sectorClients = clients.filter((c) => c.sector === sector)
            if (sectorClients.length === 0) return null
            return (
              <div key={sector} className={styles.sectorBlock}>
                <Reveal>
                  <h2 className={styles.sectorTitle}>{sectorLabels[sector]}</h2>
                </Reveal>
                <div className={styles.clientGrid}>
                  {sectorClients.map((c, i) => (
                    <Reveal key={c.name} delay={i * 0.06}>
                      <div className={styles.clientCard}>
                        <div className={styles.clientInitials}>
                          {c.name.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                        </div>
                        <div className={styles.clientName}>{c.name}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className={`section ${styles.disclaimerSection}`}>
        <div className="container">
          <Reveal>
            <p className={styles.disclaimer}>{clientsDisclaimer}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
