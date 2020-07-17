import React from 'react'
import { Global as GlobalStyles, css } from '@emotion/core'
import { small } from '../style/space'

const styles = ({ root }) => css`
  html {
    font-family: -apple-system, Helvetica, Arial, san-serif;
  }

  body {
    margin: 0;
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
