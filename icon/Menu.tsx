import React, { SVGProps } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'

const Vector = styled.svg<{ css?: SerializedStyles }>`
  ${({ css }) => css}
`

export const Menu = ({ ...props }: SVGProps<SVGSVGElement> & { css?: SerializedStyles }) => (
  <Vector xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" {...props}>
    <g stroke={props.color ?? '#000'} strokeWidth="20">
      <path d="M0 10L120 10" />
      <path d="M40 110L120 110" />
      <path d="M20 60L120 60" />
    </g>
  </Vector>
)
