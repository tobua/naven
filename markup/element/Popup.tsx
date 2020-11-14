import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { Close } from '../../icon'
import { Space, Color, Layer } from '../../style'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${Space.medium};
  display: flex;
  background: ${Color.white};
  z-index: ${Layer.Popup};
`

const Content = styled.div`
  position: relative;
  width: 100%;
`

const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  width: ${Space.medium};
  height: ${Space.medium};
`

const ScrollContainer = styled.div`
  overflow: auto;
`

interface IPopup {
  show?: boolean
  onClose: () => any
  children: any
}

export const Popup = ({ show = true, onClose, children }: IPopup) => {
  const scrollContainerRef = useRef()
  useEffect(() => {
    if (scrollContainerRef.current && show) {
      disableBodyScroll(scrollContainerRef.current)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [show])

  return (
    <>
      {show ? (
        <Wrapper>
          <Content>
            <CloseContainer onClick={onClose}>
              <Close />
            </CloseContainer>
            <ScrollContainer ref={scrollContainerRef}>
              {children}
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
              <p>tstsfds</p>
            </ScrollContainer>
          </Content>
        </Wrapper>
      ) : null}
    </>
  )
}
