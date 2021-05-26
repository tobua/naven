import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
// @ts-ignore
import { Color, spaceStyleProp, radiusStyleProp } from 'naven'
import DefaultHighlighter, {
  Prism,
} from 'react-syntax-highlighter/dist/esm/index'
import githubStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/github'
import prismStyle from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

export const InlineCode = styled.code<{ css?: SerializedStyles }>`
  background-color: ${Color.Gray[300]};
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  border-radius: 3px;
  padding: 2px 4px;
  ${({ css }) => css}
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
}: ICode) => {
  const SyntaxHighlighter = jsx ? Prism : DefaultHighlighter
  const importedStyle = jsx ? prismStyle : githubStyle

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
}
