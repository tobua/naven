import React from 'react'
import styled from '@emotion/styled'
import { Color, Space } from '../../style'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 0;
`

const Dot = styled.div`
  position: absolute;
  width: ${Space.small};
  height: ${Space.small};
  border-radius: ${Space.small};
  background: ${Color.highlight};
  right: -${Space.tiny};
  top: -${Space.tiny};
  color: ${Color.contrast};
`

interface IBadge {
  children: any
  count?: number | string
}

export const Badge = ({ children, count = null }: IBadge) => (
  <Wrapper>
    <Dot>{count}</Dot>
    {children}
  </Wrapper>
)
