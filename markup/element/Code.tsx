import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

interface ICode {
  children: string
  language?: 'javascript' | 'typescript'
}

export const Code = ({ children, language = 'typescript' }: ICode) => {
  return <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
}
