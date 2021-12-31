import React, { useState, HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import Text from '../text/Text'
import Close from '../icon/Close'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  type?: 'info' | 'warning' | 'error'
  closeable?: true
}

type Sheets = 'Wrapper' | 'CloseContainer'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Wrapper: {
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

const Alert = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, closeable, ...otherProps } = props
  const [closed, close] = useState(false)

  if (closeable && closed) {
    return null
  }

  return (
    <Sheet.Wrapper.Component css={Sheet.Wrapper.css} {...otherProps}>
      {closeable && (
        <Sheet.CloseContainer.Component css={Sheet.CloseContainer.css} onClick={() => close(true)}>
          <Close css={{ flex: 1 }} />
        </Sheet.CloseContainer.Component>
      )}
      <Text space={0}>{children}</Text>
    </Sheet.Wrapper.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Alert)
