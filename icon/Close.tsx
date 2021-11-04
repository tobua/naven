import React, { SVGProps } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Color } from '../style'

const Vector = styled.svg<{ css?: SerializedStyles }>`
  ${({ css }) => css}
`

export const Close = ({ ...props }: SVGProps<SVGSVGElement> & { css?: SerializedStyles }) => (
  <Vector xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" {...props}>
    <g stroke={props.color ?? Color.black.var} strokeWidth="20">
      <path d="M7.071 6.929L113.137 112.995" />
      <path d="M6.929 112.995L112.995 6.929" />
    </g>
  </Vector>
)
