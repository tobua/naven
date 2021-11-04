import React, { useState } from 'react'
import { Global as GlobalStyles, css as cssStyles } from '@emotion/react'
import { throttle } from 'throttle-debounce'

// eslint-disable-next-line import/no-mutable-exports
export let updateGlobalCSSVariables = null

export const DynamicGlobalStyles = ({ initialVariables }: { initialVariables: {} }) => {
  // eslint-disable-next-line prefer-const
  let [variables, setVariables] = useState(initialVariables)

  const setVariablesThrottled = throttle(50, true, setVariables, true)

  updateGlobalCSSVariables = (newVariables) => {
    variables = {
      ...variables,
      ...newVariables,
    }

    setVariablesThrottled(variables)
  }

  const styles = cssStyles`
      :root {
        ${Object.keys(variables).map((key) => `${key}: ${variables[key]};\n`)}
      }
    `

  return <GlobalStyles styles={styles} />
}
