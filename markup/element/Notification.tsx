import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Space, Color, Layer, radius, toPx } from '../../style'

type NotificationType = 'info' | 'warning' | 'error'

const ActiveNotifications = []
let rerender: () => void

const Wrapper = styled.div<{ space?: string | number }>`
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

const NotificationContainer = styled.div<{ gap?: string | number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: ${({ gap }) => toPx(gap)};
  ${({ css }) => css}
`

const NotificationElement = styled.div<{ type: NotificationType }>`
  display: flex;
  background-color: white;
  border: 1px solid
    ${({ type }) => {
      if (type === 'error') {
        return Color.error
      }

      if (type === 'warning') {
        return Color.warning
      }

      return Color.highlight
    }};
  padding: ${Space.small};
  min-width: 30%;
  ${() => radius()}
  ${({ css }) => css}
`

interface INotification {
  message: string
  duration?: number
  type: NotificationType
}

export const addNotification = ({
  message,
  duration = 8,
  type = 'info',
}: INotification) => {
  ActiveNotifications.push({ message, type })

  if (rerender) {
    rerender()
  }

  setTimeout(() => {
    ActiveNotifications.shift()

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
          <NotificationElement key={index} css={css} type={notification.type}>
            {notification.message}
          </NotificationElement>
        ))}
      </NotificationContainer>
    </Wrapper>
  )
}
