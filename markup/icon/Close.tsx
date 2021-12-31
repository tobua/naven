import React, { SVGProps, useMemo } from 'react'
import type { CSS } from '@stitches/react'
import { naven } from '../../style'

export default ({ css, ...props }: SVGProps<SVGSVGElement> & { css?: CSS; ref?: undefined }) => {
  const Vector = useMemo(() => naven.styled('svg', css ?? {}), [css])
  return (
    <Vector xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" {...props}>
      <g stroke={props.color ?? naven.theme.color.backgroundContrast.value} strokeWidth="20">
        <path d="M7.071 6.929L113.137 112.995" />
        <path d="M6.929 112.995L112.995 6.929" />
      </g>
    </Vector>
  )
}
