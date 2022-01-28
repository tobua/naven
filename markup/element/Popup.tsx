import React, { useRef, useEffect, HTMLAttributes, ReactNode, DetailedHTMLProps } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { naven, Layer } from '../../style'
import { createComponent } from '../../utility/component'
import Close from '../icon/Close'

export interface Props {
  Component: {
    children: ReactNode
    show?: boolean
    onClose: () => any
    close?: ReactNode
  } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  CloseContainer: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  ScrollContainer: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const styles = () => ({
  Main: {
    tag: 'div',
    main: true,
    css: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      background: naven.theme.color.background,
      zIndex: Layer.Popup,
    },
  },
  Content: {
    tag: 'div',
    css: {
      position: 'relative',
      width: '100%',
    },
  },
  CloseContainer: {
    tag: 'div',
    css: {
      position: 'absolute',
      top: naven.theme.space.medium,
      right: naven.theme.space.medium,
      cursor: 'pointer',
      width: naven.theme.space.medium,
      height: naven.theme.space.medium,
    },
  },
  ScrollContainer: {
    tag: 'div',
    css: {
      overflow: 'auto',
      height: `calc(100% - 2 * ${naven.theme.space.medium})`,
      padding: naven.theme.space.medium,
    },
  },
})

export default createComponent(styles)<Props>(function Popup({ props, Sheet }) {
  const { children, show, close, onClose, ...otherProps } = props
  const scrollContainerRef = useRef()

  useEffect(() => {
    if (scrollContainerRef.current && show) {
      disableBodyScroll(scrollContainerRef.current)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [show])

  if (!show) {
    return null
  }

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      <Sheet.Content.Component css={Sheet.Content.css}>
        <Sheet.CloseContainer.Component css={Sheet.CloseContainer.css} onClick={onClose}>
          {close || <Close />}
        </Sheet.CloseContainer.Component>
        <Sheet.ScrollContainer.Component css={Sheet.ScrollContainer.css} ref={scrollContainerRef}>
          {children}
        </Sheet.ScrollContainer.Component>
      </Sheet.Content.Component>
    </Sheet.Main.Component>
  )
})
