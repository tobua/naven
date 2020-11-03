import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Close } from '../../icon'
import { Space, Color } from '../../style'

type Type = 'info' | 'warning' | 'error'

const valueByType = (type: Type, values: [string, string, string]) => {
  if (type === 'warning') {
    return values[1]
  }

  if (type === 'error') {
    return values[2]
  }

  return values[0]
}

const Wrapper = styled.div<{ type: Type }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${Space.small};
  border-radius: ${Space.small};
  border: 1px solid
    ${({ type }) =>
      valueByType(type, [Color.Gray['500'], Color.warning, Color.error])};
`

const CloseContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  right: ${Space.small};
  cursor: pointer;
  width: ${Space.small};
  height: ${Space.small};
`

interface IAlert {
  type?: Type
  closeable?: boolean
  children: string
}

export const Alert = ({
  type = 'info',
  closeable = false,
  children,
}: IAlert) => {
  const [closed, close] = useState(false)

  if (closeable && closed) {
    return null
  }

  return (
    <Wrapper type={type}>
      {closeable && (
        <CloseContainer onClick={() => close(true)}>
          <Close style={{ flex: 1 }} />
        </CloseContainer>
      )}
      {children}
    </Wrapper>
  )
}
