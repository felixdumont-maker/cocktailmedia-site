'use client'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type Variant =
  | 'primary'        // rouge bg → noir on hover
  | 'secondary'      // noir outline → filled noir on hover
  | 'ghost-dark'     // faint white border on dark bg → rouge on hover
  | 'white-on-rouge' // white bg on rouge section → noir on hover
  | 'outline-white'  // white border on colored bg → white fill on hover
  | 'creme-on-dark'  // creme bg on dark bg → rouge on hover

type Size = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type AsLink = BaseProps & { href: string; external?: boolean } & Omit<ComponentPropsWithoutRef<'a'>, 'href'>
type AsButton = BaseProps & { href?: never } & ComponentPropsWithoutRef<'button'>

type BtnProps = AsLink | AsButton

const sizeClass: Record<Size, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

export default function Btn({ variant = 'primary', size = 'md', className = '', children, ...rest }: BtnProps) {
  const cls = `btn btn-${variant} ${sizeClass[size]} ${className}`.trim()

  if ('href' in rest && rest.href) {
    const { href, external, ...linkRest } = rest as AsLink
    if (external) {
      return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...(linkRest as ComponentPropsWithoutRef<'a'>)}>{children}</a>
    }
    return <Link href={href} className={cls} {...(linkRest as ComponentPropsWithoutRef<'a'>)}>{children}</Link>
  }

  const { ...btnRest } = rest as AsButton
  return <button className={cls} {...btnRest}>{children}</button>
}
