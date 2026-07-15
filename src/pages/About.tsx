import { Helmet } from 'react-helmet-async'
import { CheckCircle2, Quote } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { about } from '../content/about'
import { team } from '../content/team'
import styles from './About.module.css'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — CorpSolutions</title>
        <meta name="description" content="Quality service provider in Consultancy, BPO and Recruitment — serving Insurance, Telecom and Banking sectors across India." />
      </Helmet>

      {/* Page hero */}
      <div className={styles.pageHero}>
        <div className="container">
          <Reveal>
            <span className={styles.eyebrow}>About CorpSolutions</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className={styles.heroTitle}>A Trustworthy Partner in Your Business</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.heroSub}>{about.intro[0]}</p>
          </Reveal>
        </div>
        <div className={styles.heroDiamond} aria-hidden="true" />
      </div>

      {/* Innovation quote */}
      <section className={`section ${styles.quoteSection}`}>
        <div className="container">
          <Reveal>
            <blockquote className={styles.quote}>
              <Quote size={36} className={styles.quoteIcon} aria-hidden="true" />
              <p>{about.innovationQuote}</p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* About paragraphs */}
      <section className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <SectionHeading eyebrow="Who We Are" title="Deep expertise, long-term partnerships." />
              <div className={styles.aboutParas}>
                {about.intro.slice(1).map((p, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className={styles.aboutStats}>
              {[
                { label: 'Sectors Served', value: 'Insurance · Telecom · Banking' },
                { label: 'Office Locations', value: 'Mumbai & Kolkata' },
                { label: 'Services', value: '10+ Specialisations' },
                { label: 'Approach', value: 'Single stop, multiple solutions' },
              ].map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why 20 reasons */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="Why CorpSolutions"
            title="20 reasons to partner with us."
            align="center"
          />
          <div className={styles.reasonsGrid}>
            {about.whyReasons.map((r, i) => (
              <Reveal key={i} delay={(i % 4) * 0.07}>
                <div className={styles.reasonCard}>
                  <CheckCircle2 size={16} className={styles.reasonIcon} />
                  <span>{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <SectionHeading eyebrow="Leadership" title="Our Management Team." align="center" />
          <div className={styles.teamGrid}>
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className={styles.teamCard}>
                  <div className={styles.teamAvatar}>
                    {m.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className={styles.teamName}>{m.name}</h3>
                  <div className={styles.teamTitle}>{m.title}</div>
                  <p className={styles.teamBio}>{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
