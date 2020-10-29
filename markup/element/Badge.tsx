import React from 'react'
import { SerializedStyles } from '@emotion/core'
import styled from '@emotion/styled'
import { Color, Space } from '../../style'

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  ${({ css }) => css}
`

const Dot = styled.div<{ hasContent: boolean; css: SerializedStyles }>`
  position: absolute;
  min-width: ${({ hasContent }) => (hasContent ? 'auto' : Space.small)};
  height: ${({ hasContent }) => (hasContent ? Space.medium : Space.small)};
  border-radius: ${Space.small};
  background: ${Color.highlight};
  right: -${({ hasContent }) => (hasContent ? Space.small : Space.tiny)};
  top: -${({ hasContent }) => (hasContent ? Space.small : Space.tiny)};
  color: ${Color.contrast};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ hasContent }) => (hasContent ? Space.tiny : 0)};
  ${({ css }) => css}
`

interface IBadge {
  children: any
  count?: number | string
  css: SerializedStyles
  cssDot: SerializedStyles
}

export const Badge = ({ children, count = null, css, cssDot }: IBadge) => (
  <Wrapper css={css}>
    <Dot css={cssDot} hasContent={!!count}>
      {count}
    </Dot>
    {children}
  </Wrapper>
)
