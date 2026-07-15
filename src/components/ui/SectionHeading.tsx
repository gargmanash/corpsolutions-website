import Reveal from './Reveal'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  accentColor?: string
}

export default function SectionHeading({ eyebrow, title, intro, align = 'left', accentColor }: SectionHeadingProps) {
  return (
    <div className={styles.wrap} style={{ textAlign: align }}>
      {eyebrow && (
        <Reveal>
          <span className={styles.eyebrow} style={accentColor ? { color: accentColor } : undefined}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={styles.title}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className={styles.intro}>{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
