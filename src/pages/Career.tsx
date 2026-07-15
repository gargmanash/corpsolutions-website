import { Helmet } from 'react-helmet-async'
import { Mail, ArrowRight } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { company } from '../content/company'
import styles from './Career.module.css'

const areas = [
  'Finance and Accounts',
  'Legal, Secretarial and Compliance',
  'Actuarial',
  'Information Technology',
  'Human Resources',
  'Sales and Marketing',
  'Call Centre and Back Office',
]

export default function Career() {
  return (
    <>
      <Helmet>
        <title>Career — CorpSolutions</title>
        <meta name="description" content="Join CorpSolutions — a place where employees' future aspirations are evolved. Post your resume to jobs@corpsolutions.in" />
      </Helmet>

      <div className={styles.pageHero}>
        <div className="container">
          <Reveal><span className={styles.eyebrow}>Join Our Team</span></Reveal>
          <Reveal delay={0.08}>
            <h1 className={styles.heroTitle}>A place where employees' future aspirations are evolved.</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.heroSub}>
              If you are looking for a rewarding career and have a desire to work with a highly skilled team,
              CorpSolutions is an organisation to start your career with.
            </p>
          </Reveal>
        </div>
        <div className={styles.heroDiamond} aria-hidden="true" />
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div>
              <Reveal>
                <h2 className={styles.sectionTitle}>Why work with us?</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className={styles.para}>
                  CorpSolutions offers a competitive package of employee benefit programs that is designed to reflect
                  our commitment to well-being of our employees. Our team consists of highly skilled professionals
                  from various professional backgrounds who bring rich experience from different industries.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className={styles.para}>
                  We believe in continuous learning, process improvement and creating an environment where every
                  team member can grow and contribute to our clients' success.
                </p>
              </Reveal>
            </div>

            <div className={styles.applyCard}>
              <Reveal>
                <div className={styles.applyCardInner}>
                  <Mail size={32} className={styles.applyIcon} />
                  <h3 className={styles.applyTitle}>Send us your resume</h3>
                  <p className={styles.applyDesc}>
                    We're always looking for talented people across all our service areas. Drop us your resume
                    and we'll reach out when the right opportunity comes up.
                  </p>
                  <a href={`mailto:${company.careersEmail}`} className={styles.applyEmail}>
                    {company.careersEmail}
                  </a>
                  <Button href={`mailto:${company.careersEmail}`} size="lg">
                    Apply Now <ArrowRight size={18} />
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.areasSection}`}>
        <div className="container">
          <Reveal>
            <h2 className={styles.sectionTitle}>Areas we hire in</h2>
          </Reveal>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => (
              <Reveal key={a} delay={i * 0.06}>
                <div className={styles.areaChip}>{a}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
