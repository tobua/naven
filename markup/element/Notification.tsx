import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Space } from '../../style'

const NotificationState = {}
let updateComponent

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: ${Space.small};
`

const NotificationContainer = styled.div`
  display: flex;
  background-color: red;
`

interface INotification {
  message: string
  duration: number
  type: 'info' | 'warning' | 'error'
}

export const addNotification = ({
  message,
  duration = 3,
  type,
}: INotification) => {
  const randomId = Math.floor(Math.random() * 99999) + 1
  NotificationState[randomId] = { message, type }

  if (updateComponent) {
    updateComponent()
  }

  setTimeout(() => {
    delete NotificationState[randomId]

    if (updateComponent) {
      updateComponent()
    }
  }, duration * 1000)
}

// TODO similar to notyf
export const Notification = () => {
  const [, update] = useState()
  // Make update accessible from outside.
  updateComponent = update

  // No notifications to show.
  if (!Object.keys(NotificationState).length) {
    return null
  }

  return (
    <Wrapper>
      {Object.keys(NotificationState).map((key) => (
        <NotificationContainer>
          {NotificationState[key].message}
        </NotificationContainer>
      ))}
    </Wrapper>
  )
}
