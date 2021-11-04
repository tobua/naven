import React, { ReactNode } from 'react'
import { Global as GlobalStyles, css as cssStyles, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import emotionReset from 'emotion-reset'
import { head } from 'wasser'
import { Breakpoint, Space, Font, Color, isCssVariable, CSSVariable } from '../../style'
import { DynamicGlobalStyles } from './Dynamic'

const findVariables = (item: any, add: (key: string, value: string) => void) => {
  Object.keys(item).forEach((key) => {
    if (isCssVariable(item[key])) {
      add(item[key].name, item[key].value)
    } else if (typeof item[key] === 'object') {
      // Nested search.
      findVariables(item[key], add)
    }
  })
}

const initialVariables = () => {
  const variables = {}

  findVariables(Color, (key, value) => {
    variables[key] = value
  })

  return variables
}

const styles = ({ root, css, rootCss, bodyCss }: Props) => cssStyles`
  ${emotionReset}

  body {
    margin: ${Space.medium};
    font-family: -apple-system, Helvetica, Arial, sans-serif;
    line-height: 1.2;
    background: ${Color.background.var};
    color: ${Color.backgroundContrast.var};

    ${bodyCss}
  }

  ${root} {
    display: grid;
    row-gap: ${Space.medium};
    grid-template-columns:
      auto minmax(0, 250px) 980px minmax(0, 250px)
      auto;
    ${Font.size.medium}

    ${Breakpoint.Tablet} {
      grid-template-columns: 0 0 1fr 0 0;
    }

    ${rootCss}
  }

  ::selection {
    background: ${Color.highlight};
    color: ${Color.colorContrast};
  }

  ${head()}

  ${css}
`

interface Props {
  root?: string
  css?: SerializedStyles
  rootCss?: SerializedStyles
  bodyCss?: SerializedStyles
}

export const Global = ({ root = '#root', css, rootCss, bodyCss }: Props) => (
  <>
    <GlobalStyles styles={styles({ root, css, rootCss, bodyCss })} />
    <DynamicGlobalStyles initialVariables={initialVariables()} />
  </>
)

export const Theme = ({
  children,
  variables,
  css,
}: {
  children: ReactNode
  variables: [CSSVariable, string | number][]
  css?: SerializedStyles
}) => {
  const ComponentWithThemeStyles = styled.div<{ css?: SerializedStyles }>`
    ${variables.map((values) => `${values[0].name}: ${values[1]};`)}
  `

  return <ComponentWithThemeStyles css={css}>{children}</ComponentWithThemeStyles>
}
