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
  style?: object
}

export const Code = ({
  space,
  children,
  jsx = false,
  language = 'typescript',
  style,
  ...props
}: ICode) => (
  <Lazy
    imports={Promise.all([
      import('react-syntax-highlighter'),
      // Default style
      import('react-syntax-highlighter/dist/esm/styles/hljs/github'),
      // Default style for jsx
      import('react-syntax-highlighter/dist/esm/styles/prism/prism'),
    ])}
    result={(Component, stylesHljs, stylesPrism) => {
      const SyntaxHighlighter = jsx ? Component.Prism : Component.default
      const importedStyle = jsx ? stylesPrism.default : stylesHljs.default

      return (
        <SyntaxHighlighter
          language={language}
          style={style ?? importedStyle}
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
