import React, { SVGProps } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'

const Vector = styled.svg<{ css?: SerializedStyles }>`
  ${({ css }) => css}
`

export const Menu = ({
  ...props
}: SVGProps<SVGSVGElement> & { css?: SerializedStyles }) => (
  <Vector
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 120 120"
  >
    <g stroke="#000" strokeWidth="20" clipPath="url(#clip0)">
      <path d="M0 10L120 10" />
      <path d="M40 110L120 110" />
      <path d="M20 60L120 60" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H120V120H0z" />
      </clipPath>
    </defs>
  </Vector>
)
