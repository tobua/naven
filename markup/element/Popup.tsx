import React from 'react'
import styled from '@emotion/styled'
import { Space, Color } from '../../style'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${Space.medium};
  display: flex;
  background: ${Color.white};
  width: 100%;
  height: 100%;
`

interface IPopup {
  show?: boolean
  children: any
}

export const Popup = ({ show = true, children }: IPopup) => (
  <>{show ? <Wrapper>{children}</Wrapper> : null}</>
)
