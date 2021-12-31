import React, { useState, HTMLAttributes, ReactNode } from 'react'
import { usePopper } from 'react-popper'
// @ts-ignore
import { naven } from 'naven'
import type { ComponentProps, ComponentStylesDefinition } from '../types'
import { createComponent } from '../utility/component'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  content: ReactNode
  arrow?: boolean
  close?: boolean
  children: ReactNode
}

type Sheets = 'Wrapper'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Wrapper: {
    tag: 'div',
    main: true,
    css: {
      display: 'inline-flex',
    },
  },
})

const wrapper = {
  marginLeft: 10,
  padding: 10,
  backgroundColor: 'white',
  borderRadius: 5,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'black',
}

const closeStyle = {
  position: 'absolute' as 'absolute',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  top: -9,
  right: -9,
  cursor: 'pointer',
  background: 'white',
  width: 20,
  height: 20,
  borderRadius: 40,
  border: '1px solid black',
  boxShadow: '1px 1px 2px gray',
  outline: 'none',
}

const closeLine = (rotation: number) => ({
  position: 'absolute' as 'absolute',
  left: 4,
  display: 'flex',
  height: 2,
  width: 10,
  background: 'black',
  transform: `rotate(${rotation}deg)`,
})

const hideBorder = {
  position: 'absolute' as 'absolute',
  left: -2,
  bottom: -3,
  height: 12,
  width: 11,
  background: 'white',
}

const arrowStyle = {
  width: 10,
  height: 10,
  marginLeft: 5,
  background: 'white',
  borderLeft: '1px solid black',
  borderBottom: '1px solid black',
  transform: 'rotate(45deg)',
}

interface ContentProps {
  children: ReactNode
  referenceElement: any
  open: boolean
  setOpen: (state: boolean) => void
  arrow?: boolean
  close?: boolean
}

const Content = ({ children, referenceElement, open, setOpen, arrow, close }: ContentProps) => {
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    placement: 'right',
  })

  return (
    <div
      ref={setPopperElement}
      style={{
        ...styles.popper,
        ...{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'inherit' : 'none',
          // Otherwise tooltip overlaid by number input switches in safari.
          zIndex: 1,
        },
      }}
      {...attributes.popper}
    >
      <div style={wrapper}>{children}</div>
      {arrow && (
        <div ref={setArrowElement} style={styles.arrow}>
          <div style={arrowStyle} />
        </div>
      )}
      {close && (
        <button
          style={closeStyle}
          type="button"
          onClick={() => {
            setOpen(false)
          }}
          onKeyUp={(event) => {
            if (event.key === 'Escape') {
              setOpen(false)
            }
          }}
        >
          <span style={hideBorder} />
          <span style={closeLine(45)} />
          <span style={closeLine(-45)} />
        </button>
      )}
    </div>
  )
}

const Tooltip = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, content, arrow = true, close = false, ...otherProps } = props
  const [referenceElement, setReferenceElement] = useState(null)
  // Only initialize plugin (absolutely position hidden tooltip element)
  // when it's actually needed.
  const [initialized, setInitialized] = useState(false)
  // Once initialized the tooltip content is always rendered but only
  // visible if it's currently open.
  const [open, setOpen] = useState(false)

  if (open && !initialized) {
    setInitialized(true)
  }

  return (
    <>
      <Sheet.Wrapper.Component
        css={Sheet.Wrapper.css}
        ref={setReferenceElement}
        role="button"
        tabIndex={0}
        aria-label="Open tooltip"
        onMouseEnter={() => setOpen(true)}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            setOpen(!open)
          }
        }}
        onClick={() => setOpen(!open)}
        {...otherProps}
      >
        {children}
      </Sheet.Wrapper.Component>
      {initialized && (
        <Content
          referenceElement={referenceElement}
          arrow={arrow}
          close={close}
          open={open}
          setOpen={setOpen}
        >
          {content}
        </Content>
      )}
    </>
  )
}

export default createComponent<Props, Sheets>(styles, Tooltip)
