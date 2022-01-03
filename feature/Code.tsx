import React from 'react'
// @ts-ignore
import { naven } from 'naven'
import DefaultHighlighter, { SyntaxHighlighterProps, Prism } from 'react-syntax-highlighter'
import githubStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/github.js'
import prismStyle from 'react-syntax-highlighter/dist/esm/styles/prism/prism.js'

interface ICode {
  children: string
  jsx?: boolean
  language?: 'javascript' | 'typescript' | string
  style?: object
}

export default function Code({
  children,
  jsx = false,
  language = 'typescript',
  style,
  customStyle,
  ...props
}: ICode & SyntaxHighlighterProps) {
  const SyntaxHighlighter = jsx ? Prism : DefaultHighlighter
  const importedStyle = jsx ? prismStyle : githubStyle

  return (
    <SyntaxHighlighter
      language={language}
      style={style ?? importedStyle}
      customStyle={{
        borderRadius: naven.theme.look.radius,
        fontFamily: naven.theme.font.familyMono,
        lineHeight: 1.4,
        ...(typeof customStyle === 'object' ? customStyle : {}),
      }}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  )
}
