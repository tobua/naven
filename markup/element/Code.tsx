import React from 'react'
import styled from '@emotion/styled'
import { Color, spaceStyleProp, radiusStyleProp } from '../../style'
import { Lazy } from './Lazy'

export const InlineCode = styled.code`
  background-color: ${Color.Gray[300]};
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  border-radius: 3px;
  padding: 2px 4px;
`

interface ICode {
  children: string
  space?: number | string
  jsx?: boolean
  language?: 'javascript' | 'typescript'
  style?: string
}

export const Code = ({
  space,
  children,
  jsx = false,
  language = 'typescript',
  style = 'github',
  ...props
}: ICode) => (
  <Lazy
    imports={Promise.all([
      import('react-syntax-highlighter'),
      import('react-syntax-highlighter/dist/esm/styles/hljs'),
    ])}
    result={(Component, styles) => {
      const SyntaxHighlighter = jsx ? Component.PrismLight : Component.default
      const importedStyle = styles[style] || styles.github

      return (
        <SyntaxHighlighter
          language={language}
          style={importedStyle}
          customStyle={{
            ...spaceStyleProp(space),
            ...radiusStyleProp(),
            fontFamily: 'monospace, monospace',
          }}
          {...props}
        >
          {children}
        </SyntaxHighlighter>
      )
    }}
  />
)
