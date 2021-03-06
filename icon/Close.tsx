import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'

const Vector = styled.svg<{ css?: SerializedStyles }>`
  ${({ css }) => css}
`

export const Close = ({
  ...props
}: React.SVGProps<SVGSVGElement> & { css?: SerializedStyles }) => (
  <Vector
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 120 120"
  >
    <g stroke="#000" strokeWidth="20" clipPath="url(#clip0)">
      <path d="M7.071 6.929L113.137 112.995" />
      <path d="M6.929 112.995L112.995 6.929" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H120V120H0z" />
      </clipPath>
    </defs>
  </Vector>
)
