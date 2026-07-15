import { Link } from 'react-router-dom'
import styles from './Button.module.css'

interface ButtonProps {
  href?: string
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  href,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ')

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
