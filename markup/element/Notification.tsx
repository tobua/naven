import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled'
import { Space, Color, Layer } from '../../style'

const ActiveNotifications = []
let rerender: () => void

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: ${Space.small};
  z-index: ${Layer.Notification};
  max-width: 50%;
`

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NotificationElement = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid ${Color.highlight};
  margin-top: ${Space.small};
  padding: ${Space.medium};
  min-width: 30%;
`

interface INotification {
  message: string
  duration?: number
  type: 'info' | 'warning' | 'error'
}

export const addNotification = ({
  message,
  duration = 8,
  type,
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

export const Notification = () => {
  const [, setState] = useState(0)
  // Forces the component to update and can be accessed from outside.
  rerender = useCallback(() => setState((count) => count + 1), [])

  // No notifications to show.
  if (!ActiveNotifications.length) {
    return null
  }

  return (
    <Wrapper>
      <NotificationContainer>
        {ActiveNotifications.map((notification, index) => (
          <NotificationElement key={index}>
            {notification.message}
          </NotificationElement>
        ))}
      </NotificationContainer>
    </Wrapper>
  )
}
