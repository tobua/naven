import React from 'react'
import { Global as GlobalStyles, css } from '@emotion/core'
import emotionReset from 'emotion-reset'
import { small } from '../style/space'

const styles = ({ root }) => css`
  ${emotionReset}

  html {
    font-family: -apple-system, Helvetica, Arial, san-serif;
  }

  body {
    margin: ${small};
  }

  ${root} {
    display: grid;
    row-gap: ${small};
    grid-template-columns:
      auto minmax(0, 250px) minmax(0, 1000px) minmax(0, 250px)
      auto;
  }
`

export const Global = ({ root = '#root' }) => (
  <GlobalStyles styles={styles({ root })} />
)
