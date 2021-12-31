import React, { useState, HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import Heading from '../text/Heading'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  headers?: (string | ReactNode)[]
  initialOpen?: number
}

type Sheets = 'Wrapper' | 'Head' | 'Content' | 'Group'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Wrapper: {
    tag: 'div',
    main: true,
    css: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  Head: {
    tag: 'div',
    css: {
      display: 'flex',
      cursor: 'pointer',
    },
  },
  Content: {
    tag: 'div',
  },
  Group: {
    tag: 'div',
    css: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: naven.theme.space.small,
    },
  },
})

const Accordion = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, headers, initialOpen, ...otherProps } = props
  const [openIndex, setOpen] = useState<number>(initialOpen ?? 0)
  return (
    <Sheet.Wrapper.Component css={Sheet.Wrapper.css} {...otherProps}>
      {children.map((child: ReactNode, index: number) => {
        let header = headers[index]

        if (typeof header === 'string') {
          header = (
            <Heading as="h3" space={0}>
              {header}
            </Heading>
          )
        }

        return (
          <Sheet.Group.Component css={Sheet.Group.css} key={index}>
            <Sheet.Head.Component css={Sheet.Head.css} onClick={() => setOpen(index)}>
              {header}
            </Sheet.Head.Component>
            <Sheet.Content.Component
              css={{ ...Sheet.Content.css, display: index === openIndex ? 'flex' : 'none' }}
            >
              {child}
            </Sheet.Content.Component>
          </Sheet.Group.Component>
        )
      })}
    </Sheet.Wrapper.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Accordion)
