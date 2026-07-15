interface LogoProps {
  variant?: 'light' | 'dark'
  showTagline?: boolean
  className?: string
}

export default function Logo({ variant = 'dark', showTagline = true, className }: LogoProps) {
  const navyColor = variant === 'light' ? '#ffffff' : '#1E2A78'
  const azureColor = '#00AEEF'
  const taglineColor = variant === 'light' ? 'rgba(255,255,255,0.7)' : '#6C789A'

  return (
    <div className={className} style={{ display: 'inline-flex', flexDirection: 'column', gap: '2px', userSelect: 'none' }}>
      <svg
        viewBox="0 0 220 38"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CorpSolutions"
        style={{ width: 'auto', height: '34px' }}
      >
        {/* "Corp" in navy */}
        <text
          x="0"
          y="30"
          fontFamily="'Space Grotesk Variable', 'Space Grotesk', system-ui, sans-serif"
          fontWeight="700"
          fontSize="30"
          fill={navyColor}
          letterSpacing="-0.5"
        >
          Corp
        </text>
        {/* "Solutions" in azure */}
        <text
          x="81"
          y="30"
          fontFamily="'Space Grotesk Variable', 'Space Grotesk', system-ui, sans-serif"
          fontWeight="700"
          fontSize="30"
          fill={azureColor}
          letterSpacing="-0.5"
        >
          Solutions
        </text>
        {/* underline */}
        <line x1="0" y1="35" x2="220" y2="35" stroke={azureColor} strokeWidth="2.5" />
      </svg>
      {showTagline && (
        <span
          style={{
            fontFamily: "'Space Grotesk Variable', 'Space Grotesk', system-ui, sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: taglineColor,
            paddingLeft: '1px',
          }}
        >
          Consultancy&nbsp;•&nbsp;Outsourcing&nbsp;•&nbsp;Recruitment
        </span>
      )}
    </div>
  )
}
