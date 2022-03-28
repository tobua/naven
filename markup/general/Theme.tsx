import React, { ReactNode, useMemo } from 'react'
import type { CSS } from '@stitches/react'
import { naven, responsifyConfiguration } from '../../style'

interface Props {
  children?: ReactNode
  css?: CSS
  configuration?: { theme: any }
}

export default ({ css, children, configuration = { theme: {} }, ...props }: Props) => {
  const Theme = useMemo(() => naven.styled('div', css ?? {}), [css])
  const themeClass = useMemo(
    () => naven.createTheme(responsifyConfiguration(configuration)),
    [configuration]
  )

  return (
    <Theme className={themeClass} {...props}>
      {children}
    </Theme>
  )
}
