import React from 'react'
// @ts-ignore
import { spaceStyleProp, radiusStyleProp } from 'naven'
import { SyntaxHighlighterProps } from 'react-syntax-highlighter'
import DefaultHighlighter, {
  Prism,
} from 'react-syntax-highlighter/dist/esm/index'
import githubStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/github'
import prismStyle from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

interface ICode {
  children: string
  space?: number | string
  jsx?: boolean
  language?: 'javascript' | 'typescript' | string
  style?: object
}

export const Code = ({
  space,
  children,
  jsx = false,
  language = 'typescript',
  style,
  customStyle,
  ...props
}: ICode & SyntaxHighlighterProps) => {
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
        ...(typeof customStyle === 'object' ? customStyle : {}),
      }}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  )
}
