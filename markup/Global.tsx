import React from 'react'
import { Global as GlobalStyles, css } from '@emotion/core'
import emotionReset from 'emotion-reset'
import { Space } from '../style'

const styles = ({ root }) => css`
  ${emotionReset}

  html {
    font-family: -apple-system, Helvetica, Arial, sans-serif;
  }

  body {
    margin: ${Space.small};
  }

  ${root} {
    display: grid;
    row-gap: ${Space.small};
    grid-template-columns:
      auto minmax(0, 250px) minmax(max-content, 1000px) minmax(0, 250px)
      auto;
  }
`

export const Global = ({ root = '#root' }: { root?: string }) => (
  <GlobalStyles styles={styles({ root })} />
)
