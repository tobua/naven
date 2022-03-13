import React, { HTMLAttributes, ReactNode, DetailedHTMLProps } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactNode
    style?: 'code' | 'italic'
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  } & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  Main: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
}

const styles = () => ({
  Main: {
    tag: 'h1',
    main: true,
    css: {
      fontFamily: naven.theme.font.familyRegular,
      fontWeight: naven.theme.font.weightBold,
      fontSize: naven.theme.font.sizeTitle,
      lineHeight: naven.theme.font.lineHeightTitle,
      marginTop: 0,
      variants: {
        style: {
          code: {
            fontFamily: naven.theme.font.familyMono,
          },
          italic: {
            fontStyle: naven.theme.font.styleItalic,
          },
        },
      },
    },
    props: (innerStyles, props: Props['Component']) => {
      if (props.as === 'h2') {
        innerStyles.fontSize = naven.theme.font.sizeSubtitle
        innerStyles.lineHeight = naven.theme.font.lineHeightSubtitle
      }
      if (props.as === 'h3') {
        innerStyles.fontSize = naven.theme.font.sizeH3
        innerStyles.lineHeight = naven.theme.font.lineHeightH3
      }
      if (props.as === 'h4') {
        innerStyles.fontSize = naven.theme.font.sizeH4
        innerStyles.lineHeight = naven.theme.font.lineHeightH4
      }
      if (props.as === 'h5') {
        innerStyles.fontSize = naven.theme.font.sizeH5
        innerStyles.lineHeight = naven.theme.font.lineHeightH5
      }
      if (props.as === 'h6') {
        innerStyles.fontSize = naven.theme.font.sizeH6
        innerStyles.lineHeight = naven.theme.font.lineHeightH6
      }
    },
  },
})

export default createComponent(styles)<Props>(
  function Heading({ props, Sheet }) {
    const { children, ...otherProps } = props
    return (
      <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
        {children}
      </Sheet.Main.Component>
    )
  },
  (props) => [props.as]
)
