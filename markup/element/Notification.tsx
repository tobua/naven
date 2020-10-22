import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
`

interface INotification {
    message: string
    type: 'info' | 'warning' | 'error'
}

// TODO similar to notyf
export const Notification = () => <Wrapper>Notification</Wrapper>
