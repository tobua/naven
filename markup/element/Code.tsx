import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Color, spaceStyleProp } from '../../style'
import { Loader } from './Loader'
import { Paragraph } from './Text'

export const InlineCode = styled.code`
  background-color: ${Color.Gray[300]};
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  border-radius: 3px;
  padding: 2px 4px;
`

interface ICode {
  children: string
  space?: number | string
  language?: 'javascript' | 'typescript'
}

export const Code = ({ space, children, language = 'typescript' }: ICode) => {
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    import('react-syntax-highlighter')
      .then((result) => {
        setComponent(result)
      })
      .catch(() => setComponent('error'))
  })

  if (!Component) {
    return <Loader />
  }

  if (Component === 'error') {
    return <Paragraph>Error loading component.</Paragraph>
  }

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Component.default
      language={language}
      customStyle={{ ...spaceStyleProp(space) }}
    >
      {children}
    </Component.default>
  )
}
