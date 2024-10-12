import React, { useState, HTMLAttributes, ReactNode, DetailedHTMLProps, useRef } from 'react'
import { useFloating, FloatingArrow, arrow as arrowMiddleware } from '@floating-ui/react'
// @ts-ignore
import { createComponent } from 'naven'

export interface Props {
  Component: {
    arrow?: boolean
    close?: boolean
    children: ReactNode
  } & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'content'> & {
      content: ReactNode
    }
}

const styles = () => ({
  Main: {
    tag: 'div',
    main: true,
    css: {
      display: 'inline-flex',
    },
  },
})

const wrapper = {
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

// BONUS closes with react-onclickoutside
export default createComponent(styles)<Props>(function Tooltip({ props, Sheet }) {
  const { children, content, arrow = true, close = false, ...otherProps } = props
  const [open, setOpen] = useState(false)
  const arrowRef = useRef(null)
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'right',
    middleware: [
      arrowMiddleware({
        element: arrowRef,
      }),
    ],
  })

  return (
    <>
      <Sheet.Main.Component
        css={Sheet.Main.css}
        ref={refs.setReference}
        aria-label="Open tooltip"
        tabIndex={0}
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen(!open)}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            setOpen(!open)
          }
        }}
        role="button"
        {...otherProps}
      >
        {children}
      </Sheet.Main.Component>
      {open && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            ...{
              opacity: open ? 1 : 0,
              pointerEvents: open ? 'inherit' : 'none',
              // Otherwise tooltip overlaid by number input switches in safari.
              zIndex: 1,
              marginLeft: 10,
            },
          }}
        >
          <div
            style={{
              ...wrapper,
              ...(arrow && {
                marginLeft: -1,
              }),
            }}
          >
            {content}
          </div>
          {arrow && (
            <FloatingArrow
              ref={arrowRef}
              context={context}
              stroke="black"
              fill="white"
              strokeWidth={1}
            />
          )}
          {close && (
            <button
              style={closeStyle}
              type="button"
              aria-label="Tooltip content"
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
      )}
    </>
  )
})
