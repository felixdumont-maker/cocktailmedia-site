type SectionHeaderProps = {
  eyebrow: string
  heading: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  size?: 'lg' | 'md'
  eyebrowColor?: string
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtitle,
  align = 'center',
  theme = 'light',
  size = 'lg',
  eyebrowColor,
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left'
  const headingColor = theme === 'dark' ? 'var(--creme)' : 'var(--noir)'
  const eyebrowStyle = eyebrowColor ? { color: eyebrowColor } : undefined

  return (
    <div className={`section-header ${textAlign}`}>
      <p className="eyebrow" style={eyebrowStyle}>{eyebrow}</p>
      <h2
        className={size === 'lg' ? 'heading-display-lg' : 'heading-display-md'}
        style={{ color: headingColor }}
      >
        {heading}
      </h2>
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </div>
  )
}
