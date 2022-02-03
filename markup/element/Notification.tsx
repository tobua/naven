import React, { useState, useCallback, HTMLAttributes } from 'react'
import { naven, cssVariable } from '../../style'
import { createComponent } from '../../utility/component'
import { mergeStyles } from '../../utility/merge-styles'
import Close from '../icon/Close'

type NotificationType = 'info' | 'warning' | 'error'

interface INotification {
  id: string
  message: string
  duration?: number
  type: NotificationType
  closeable?: boolean
}

const ActiveNotifications: INotification[] = []
let rerender: () => void

interface AddNotificationProps {
  message: string
  duration?: number
  type: NotificationType
  closeable?: boolean
}

export const addNotification = ({
  message,
  duration = 8,
  type = 'info',
  closeable = false,
}: AddNotificationProps) => {
  const id = Math.random().toString(36).substring(7)

  ActiveNotifications.push({
    id,
    message,
    type,
    closeable,
  })

  if (rerender) {
    rerender()
  }

  if (closeable) {
    return
  }

  setTimeout(() => {
    ActiveNotifications.splice(
      ActiveNotifications.findIndex((notification) => notification.id === id),
      1
    )

    if (rerender) {
      rerender()
    }
  }, duration * 1000)
}

export interface Props {
  Component: {
    small?: true
    //   gap?: string | number
    //   space?: string | number
  } & HTMLAttributes<HTMLDivElement>
}

const styles = () => ({
  Main: {
    tag: 'div',
    main: true,
    css: {
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'fixed',
      bottom: 0,
      right: 0,
      zIndex: naven.layer.Notification,
      maxWidth: '50%',
    },
  },
  Container: {
    tag: 'div',
    css: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: naven.theme.space.small,
      background: naven.theme.color.background,
      margin: naven.theme.space.small,
      padding: naven.theme.space.small,
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
      top: `calc(50% - calc(${naven.theme.space.small} / 2))`,
    },
  },
  Element: {
    tag: 'div',
    css: {
      position: 'relative',
      display: 'flex',
      background: naven.theme.color.background,
      borderLeftWidth: 3,
      borderLeftStyle: 'solid',
      borderColor: naven.theme.color.highlight,
      minWidth: '30%',
      borderRadius: naven.theme.look.radius,
      paddingLeft: naven.theme.space.tiny,
      variants: {
        type: {
          error: {
            borderColor: naven.theme.color.error,
          },
          warning: {
            borderColor: naven.theme.color.warning,
          },
        },
      },
    },
  },
})

const Element = ({
  Sheet,
  closeable,
  message,
  id,
  ...props
}: INotification & { Sheet: any; key?: number }) => (
  <Sheet.Element.Component
    css={mergeStyles(Sheet.Element.css, {
      paddingRight: closeable ? `calc(${cssVariable(naven.theme.space.small)} * 3)` : 0,
    })}
    {...props}
  >
    {closeable && (
      <Sheet.CloseContainer.Component
        onClick={() => {
          ActiveNotifications.splice(
            ActiveNotifications.findIndex((notification) => notification.id === id),
            1
          )
          rerender()
        }}
      >
        <Close />
      </Sheet.CloseContainer.Component>
    )}
    {message}
  </Sheet.Element.Component>
)

export default createComponent(styles)<Props>(function Notification({ props, Sheet }) {
  const { children, ...otherProps } = props
  const [, setState] = useState(0)
  // Forces the component to update and can be accessed from outside.
  rerender = useCallback(() => setState((count) => count + 1), [])

  // No notifications to show.
  if (!ActiveNotifications.length) {
    return null
  }

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      <Sheet.Container.Component css={Sheet.Container.css}>
        {ActiveNotifications.map((notification, index) => (
          <Element Sheet={Sheet} key={index} {...notification} />
        ))}
      </Sheet.Container.Component>
    </Sheet.Main.Component>
  )
})

// Container rowGap = gap
