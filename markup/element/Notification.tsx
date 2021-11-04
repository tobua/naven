import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles, css as cssStyles } from '@emotion/react'
import { Space, Color, Layer, radius, toPx } from '../../style'
import { Close } from '../../icon'

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

const Wrapper = styled.div<{ space?: string | number; css?: SerializedStyles }>`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: ${({ space }) => toPx(space)};
  z-index: ${Layer.Notification};
  max-width: 50%;
  ${({ css }) => css}
`

const NotificationContainer = styled.div<{
  gap?: string | number
  css?: SerializedStyles
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: ${({ gap }) => toPx(gap)};
  ${({ css }) => css}
`

const NotificationWrapper = styled.div<{
  type: NotificationType
  closeable?: boolean
  css?: SerializedStyles
}>`
  position: relative;
  display: flex;
  background-color: white;
  border: 1px solid
    ${({ type }) => {
      if (type === 'error') {
        return Color.error.var
      }

      if (type === 'warning') {
        return Color.warning.var
      }

      return Color.highlight.var
    }};
  padding: ${Space.small};
  ${({ closeable }) => (closeable ? `padding-right: calc(${Space.small} * 3);` : '')}
  min-width: 30%;
  ${() => radius()}
  ${({ css }) => css}
`

const CloseContainer = styled.div`
  position: absolute;
  display: flex;
  right: ${Space.small};
  cursor: pointer;
  width: ${Space.small};
  height: ${Space.small};
  top: calc(50% - calc(${Space.small} / 2));
`

interface INotificationElement {
  id: string
  type: NotificationType
  closeable?: boolean
  children: string
  css?: SerializedStyles
}

const NotificationElement = ({ id, type, closeable, css, children }: INotificationElement) => (
  <NotificationWrapper type={type} css={css} closeable={closeable}>
    {closeable && (
      <CloseContainer
        onClick={() => {
          ActiveNotifications.splice(
            ActiveNotifications.findIndex((notification) => notification.id === id),
            1
          )
          rerender()
        }}
      >
        <Close
          css={cssStyles`
              flex: 1;
            `}
        />
      </CloseContainer>
    )}
    {children}
  </NotificationWrapper>
)

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

interface Props {
  gap?: string | number
  space?: string | number
  css?: SerializedStyles
  wrapperCss?: SerializedStyles
  containerCss?: SerializedStyles
}

export const Notification = ({
  gap = Space.small,
  space = Space.small,
  css,
  wrapperCss,
  containerCss,
}: Props) => {
  const [, setState] = useState(0)
  // Forces the component to update and can be accessed from outside.
  rerender = useCallback(() => setState((count) => count + 1), [])

  // No notifications to show.
  if (!ActiveNotifications.length) {
    return null
  }

  return (
    <Wrapper space={space} css={wrapperCss}>
      <NotificationContainer css={containerCss} gap={gap}>
        {ActiveNotifications.map((notification, index) => (
          <NotificationElement key={index} css={css} {...notification}>
            {notification.message}
          </NotificationElement>
        ))}
      </NotificationContainer>
    </Wrapper>
  )
}
