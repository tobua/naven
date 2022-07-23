import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { Text } from '../text/Various'

interface Props {
  imports: Promise<any>
  result: (...imports: any) => JSX.Element
}

export default ({ imports, result }: Props): JSX.Element => {
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    imports
      .then((_component) => {
        setComponent(_component)
      })
      .catch(() => setComponent('error'))
  }, [])

  if (!Component) {
    return <Loader />
  }

  if (Component === 'error') {
    return <Text>Error loading component.</Text>
  }

  if (Array.isArray(Component)) {
    return result(...Component)
  }

  return result(Component)
}
