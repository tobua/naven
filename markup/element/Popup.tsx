import React, { useEffect, useRef, ReactNode } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Close } from '../../icon'
import { Space, Color, Layer } from '../../style'

const Wrapper = styled.div<{ css?: SerializedStyles }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: ${Color.background.var};
  z-index: ${Layer.Popup};
  ${({ css }) => css}
`

const Content = styled.div<{ css?: SerializedStyles }>`
  position: relative;
  width: 100%;
  ${({ css }) => css}
`

const CloseContainer = styled.div<{ css?: SerializedStyles }>`
  position: absolute;
  top: ${Space.medium};
  right: ${Space.medium};
  cursor: pointer;
  width: ${Space.medium};
  height: ${Space.medium};
  ${({ css }) => css}
`

const ScrollContainer = styled.div<{ css?: SerializedStyles }>`
  overflow: auto;
  height: calc(100% - 2 * ${Space.medium});
  padding: ${Space.medium};
  ${({ css }) => css}
`

interface IPopup {
  show?: boolean
  onClose: () => any
  css?: SerializedStyles
  contentCss?: SerializedStyles
  scrollContainerCss?: SerializedStyles
  closeContainerCss?: SerializedStyles
  closeCss?: SerializedStyles
  close?: ReactNode
  children: any
}

export const Popup = ({
  show = true,
  onClose,
  css,
  contentCss,
  scrollContainerCss,
  closeContainerCss,
  closeCss,
  close,
  children,
}: IPopup) => {
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
        <Wrapper css={css}>
          <Content css={contentCss}>
            <CloseContainer css={closeContainerCss} onClick={onClose}>
              {close || <Close css={closeCss} />}
            </CloseContainer>
            <ScrollContainer css={scrollContainerCss} ref={scrollContainerRef}>
              {children}
            </ScrollContainer>
          </Content>
        </Wrapper>
      ) : null}
    </>
  )
}
