import React, { useState, ReactNode } from 'react'
import { css as cssStyles, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Close } from '../../icon'
import { Space, Color, radius, spaceProp } from '../../style'
import { Paragraph } from './Text'

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

const Wrapper = styled.div<{
  type: Type
  space?: string | number
  css?: SerializedStyles
}>`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${Space.small};
  ${() => radius()}
  ${spaceProp}
  ${({ css }) => css}
  border: 1px solid
    ${({ type }) => valueByType(type, [Color.Gray['500'].var, Color.warning.var, Color.error.var])};
`

const CloseContainer = styled.div`
  position: absolute;
  display: flex;
  right: ${Space.small};
  cursor: pointer;
  width: ${Space.small};
  height: ${Space.small};
`

interface IAlert {
  type?: Type
  closeable?: boolean
  space?: string | number
  css?: SerializedStyles
  children: ReactNode
}

export const Alert = ({ type = 'info', closeable = false, space, css, children }: IAlert) => {
  const [closed, close] = useState(false)

  if (closeable && closed) {
    return null
  }

  return (
    <Wrapper css={css} space={space} type={type}>
      {closeable && (
        <CloseContainer onClick={() => close(true)}>
          <Close
            css={cssStyles`
              flex: 1;
            `}
          />
        </CloseContainer>
      )}
      <Paragraph space={0}>{children}</Paragraph>
    </Wrapper>
  )
}
