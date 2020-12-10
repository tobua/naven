import React from 'react'
import { Global as GlobalStyles, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import { Breakpoint, Space } from '../style'

const styles = ({ root }) => css`
  ${emotionReset}

  body {
    margin: ${Space.small};
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    line-height: 1.2;
  }

  ${root} {
    display: grid;
    row-gap: ${Space.medium};
    grid-template-columns:
      auto minmax(0, 250px) 980px minmax(0, 250px)
      auto;

    ${Breakpoint.Tablet} {
      grid-template-columns: 0 0 1fr 0 0;
    }
  }
`

export const Global = ({ root = '#root' }: { root?: string }) => (
  <GlobalStyles styles={styles({ root })} />
)
