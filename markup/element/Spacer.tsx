import React, { HTMLAttributes } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    line?: boolean
    size?: string | number
  } & HTMLAttributes<HTMLDivElement>
}

const styles = () => ({
  Main: {
    tag: 'hr',
    main: true,
    css: {
      height: naven.theme.space.medium,
      border: 'none',
      margin: 0,
      width: '100%',
      position: 'relative',
      variants: {
        line: {
          true: {
            '&::after': {
              content: ' ',
              display: 'block',
              height: 1,
              background: naven.theme.color.backgroundContrast,
              width: '100%',
              position: 'absolute',
              top: 'calc(50% - 1px)',
            },
          },
        },
      },
    },
    props: (allStyles, props: Props['Component']) => {
      if (props.size) {
        if (typeof props.size === 'string' && Object.keys(naven.theme.space).includes(props.size)) {
          allStyles.height = naven.theme.space[props.size]
        } else {
          allStyles.height = props.size
        }
      }
    },
  },
})

export default createComponent(styles)<Props>(
  function Spacer({ props, Sheet }) {
    const { children, ...otherProps } = props

    return <Sheet.Main.Component css={Sheet.Main.css} {...otherProps} />
  },
  (props) => [props.size]
)
