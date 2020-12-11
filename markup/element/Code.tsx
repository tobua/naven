import React from 'react'
import styled from '@emotion/styled'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
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
}

export const Code = ({
  space,
  children,
  jsx = false,
  language = 'typescript',
  ...props
}: ICode) => {
  return (
    <Lazy
      imports={import('react-syntax-highlighter')}
      result={(Component) => {
        const SyntaxHighlighter = jsx ? Component.PrismLight : Component.default

        return (
          <SyntaxHighlighter
            language={language}
            style={github}
            customStyle={{ ...spaceStyleProp(space), ...radiusStyleProp() }}
            {...props}
          >
            {children}
          </SyntaxHighlighter>
        )
      }}
    />
  )
}
