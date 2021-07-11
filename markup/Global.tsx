import React from 'react'
import {
  Global as GlobalStyles,
  css as cssStyles,
  SerializedStyles,
} from '@emotion/react'
import emotionReset from 'emotion-reset'
import { Breakpoint, Space } from '../style'

interface Props {
  root?: string
  css?: SerializedStyles
  rootCss?: SerializedStyles
  bodyCss?: SerializedStyles
}

const styles = ({ root, css, rootCss, bodyCss }: Props) => cssStyles`
  ${emotionReset}

  body {
    margin: ${Space.small};
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    line-height: 1.2;

    ${bodyCss}
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

    ${rootCss}
  }

  ${css}
`

export const Global = ({ root = '#root', css, rootCss, bodyCss }: Props) => (
  <GlobalStyles styles={styles({ root, css, rootCss, bodyCss })} />
)
