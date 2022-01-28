import React, { useState, HTMLAttributes, ReactNode, DetailedHTMLProps } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'
import Text from '../text/Text'
import Close from '../icon/Close'

export interface Props {
  Component: {
    children: ReactNode
    type?: 'info' | 'warning' | 'error'
    closeable?: true
  } & HTMLAttributes<HTMLDivElement>
  CloseContainer: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const styles = () => ({
  Main: {
    tag: 'div',
    main: true,
    css: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      padding: naven.theme.space.small,
      borderWidth: 1,
      borderColor: naven.theme.color.highlight,
      borderStyle: 'solid',
      variants: {
        type: {
          info: {
            borderColor: naven.theme.color.gray500,
          },
          warning: {
            borderColor: naven.theme.color.warning,
          },
          error: {
            borderColor: naven.theme.color.error,
          },
        },
      },
    },
  },
  CloseContainer: {
    tag: 'div',
    css: {
      position: 'absolute',
      display: 'flex',
      right: naven.theme.space.small,
      cursor: 'pointer',
      width: naven.theme.space.small,
      height: naven.theme.space.small,
    },
  },
})

export default createComponent(styles)<Props>(function Alert({ props, Sheet }) {
  const { children, closeable, ...otherProps } = props
  const [closed, close] = useState(false)

  if (closeable && closed) {
    return null
  }

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {closeable && (
        <Sheet.CloseContainer.Component css={Sheet.CloseContainer.css} onClick={() => close(true)}>
          <Close css={{ flex: 1 }} />
        </Sheet.CloseContainer.Component>
      )}
      <Text space={0}>{children}</Text>
    </Sheet.Main.Component>
  )
})
