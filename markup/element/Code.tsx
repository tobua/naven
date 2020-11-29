import styled from '@emotion/styled'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Color } from '../../style'

export const InlineCode = styled.code`
  background-color: ${Color.Gray[300]};
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  border-radius: 3px;
  padding: 2px 4px;
`

interface ICode {
  children: string
  language?: 'javascript' | 'typescript'
}

export const Code = ({ children, language = 'typescript' }: ICode) => {
  return <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
}
