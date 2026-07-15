import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { company } from '../content/company'
import styles from './Contact.module.css'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(form.subject)}&body=${mailBody}`
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact — CorpSolutions</title>
        <meta name="description" content="Get in touch with CorpSolutions — Head Office in Mumbai, Branch Office in Kolkata. info@corpsolutions.in" />
      </Helmet>

      <div className={styles.pageHero}>
        <div className="container">
          <Reveal><span className={styles.eyebrow}>Contact Us</span></Reveal>
          <Reveal delay={0.08}><h1 className={styles.heroTitle}>Let's talk about your requirements.</h1></Reveal>
          <Reveal delay={0.16}>
            <p className={styles.heroSub}>
              Reach out to us — we'd love to understand your business needs and explore how we can help.
            </p>
          </Reveal>
        </div>
        <div className={styles.heroDiamond} aria-hidden="true" />
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Contact form */}
            <div>
              <Reveal>
                <h2 className={styles.formTitle}>Send us a message</h2>
              </Reveal>
              {sent ? (
                <Reveal>
                  <div className={styles.successBanner}>
                    <Send size={22} />
                    <p>Your email client should have opened. If not, email us directly at <a href={`mailto:${company.email}`}>{company.email}</a></p>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={0.08}>
                  <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <div className={styles.formRow}>
                      <label className={styles.formLabel}>
                        Full Name *
                        <input
                          className={styles.formInput}
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Email Address *
                        <input
                          className={styles.formInput}
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Subject *
                      <input
                        className={styles.formInput}
                        type="text"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Message *
                      <textarea
                        className={styles.formTextarea}
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                      />
                    </label>
                    <Button type="submit" size="lg">
                      Send Message <Send size={16} />
                    </Button>
                  </form>
                </Reveal>
              )}
            </div>

            {/* Offices */}
            <aside className={styles.offices}>
              {company.offices.map((o, i) => (
                <Reveal key={o.type} delay={i * 0.12}>
                  <div className={styles.officeCard}>
                    <h3 className={styles.officeType}>{o.type}</h3>
                    <p className={styles.officeRow}>
                      <MapPin size={15} className={styles.officeIcon} />
                      <span style={{ whiteSpace: 'pre-line' }}>{o.address}</span>
                    </p>
                    <a href={`tel:${o.phone.replace(/\s/g, '')}`} className={styles.officeRow}>
                      <Phone size={15} className={styles.officeIcon} />
                      {o.phone}
                    </a>
                    <a href={`mailto:${o.email}`} className={styles.officeRow}>
                      <Mail size={15} className={styles.officeIcon} />
                      {o.email}
                    </a>
                  </div>
                </Reveal>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
