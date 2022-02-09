import React, { useState, HTMLAttributes, ReactNode, DetailedHTMLProps, Children } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'
import Heading from '../text/Heading'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  Component: {
    children: ReactNode[]
    headers?: (string | ReactNode)[]
    initialOpen?: number
  }
  Head: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const styles = () => ({
  Main: {
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

export default createComponent(styles)<Props>(function Accordion({ props, Sheet }) {
  const { children, headers, initialOpen, ...otherProps } = props
  const [openIndex, setOpen] = useState<number>(initialOpen ?? 0)
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {Children.map(children, (child: ReactNode, index: number) => {
        let header = headers[index]

        if (typeof header === 'string') {
          header = <Heading as="h3">{header}</Heading>
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
    </Sheet.Main.Component>
  )
})
