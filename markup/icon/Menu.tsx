import React, { SVGProps, useMemo } from 'react'
import type { CSS } from '@stitches/react'
import { naven } from '../../style'

export default ({ css, ...props }: SVGProps<SVGSVGElement> & { css?: CSS; ref?: undefined }) => {
  const Vector = useMemo(() => naven.styled('svg', css ?? {}), [css])
  return (
    <Vector xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" {...props}>
      <g stroke={props.color ?? naven.theme.color.backgroundContrast.value} strokeWidth="20">
        <path d="M0 10L120 10" />
        <path d="M40 110L120 110" />
        <path d="M20 60L120 60" />
      </g>
    </Vector>
  )
}
