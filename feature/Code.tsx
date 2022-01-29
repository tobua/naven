import React from 'react'
// @ts-ignore
import { naven } from 'naven'
import DefaultHighlighter, { SyntaxHighlighterProps, Prism } from 'react-syntax-highlighter'
// eslint-disable-next-line import/extensions
import githubStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/github.js'
// eslint-disable-next-line import/extensions
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
        alignSelf: 'normal',
        ...(typeof customStyle === 'object' ? customStyle : {}),
      }}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  )
}
