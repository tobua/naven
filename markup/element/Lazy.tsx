import React, { useState, useEffect, ReactNode } from 'react'
import { Loader } from './Loader'
import { Paragraph } from './Text'

interface Props {
  imports: Promise<any>
  result: (...imports: any) => ReactNode
}

export const Lazy = ({ imports, result }: Props) => {
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    imports
      .then((_component) => {
        setComponent(_component)
      })
      .catch(() => setComponent('error'))
  })

  if (!Component) {
    return <Loader />
  }

  if (Component === 'error') {
    return <Paragraph>Error loading component.</Paragraph>
  }

  if (Array.isArray(Component)) {
    return result(...Component)
  }

  return result(Component)
}
