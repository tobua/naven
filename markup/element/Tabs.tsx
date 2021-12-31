import React, { useState, HTMLAttributes, ReactNode } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  items: {
    title: string
    content: ReactNode
  }[]
  initialTab?: number
}

type Sheets = 'Wrapper' | 'TabWrapper' | 'Tab' | 'Content'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Wrapper: {
    tag: 'div',
    main: true,
    css: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  TabWrapper: {
    tag: 'div',
    css: {
      display: 'flex',
      marginBottom: naven.theme.space.medium,
    },
  },
  Tab: {
    tag: 'div',
    css: {
      display: 'flex',
      cursor: 'pointer',
      marginRight: naven.theme.space.medium,
      '&:hover, &:focus': {
        color: naven.theme.color.interact,
        outline: 'none',
      },
      variants: {
        state: {
          active: {
            fontWeight: 'bold',
          },
        },
      },
    },
  },
  Content: {
    tag: 'div',
    css: {
      display: 'flex',
    },
  },
})

const Tabs = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, items, initialTab = 0, ...otherProps } = props
  const [tab, setTab] = useState(initialTab)
  const { content } = items[tab]

  return (
    <Sheet.Wrapper.Component css={Sheet.Wrapper.css} {...otherProps}>
      <Sheet.TabWrapper.Component css={Sheet.TabWrapper.css}>
        {items.map((_tab, index: number) => (
          <Sheet.Tab.Component
            css={Sheet.TabWrapper.css}
            key={index}
            tabIndex={0}
            // @ts-ignore
            state={index === tab ? 'active' : undefined}
            onKeyUp={(event) => event.key === 'Enter' && setTab(index)}
            onClick={() => setTab(index)}
          >
            {_tab.title}
          </Sheet.Tab.Component>
        ))}
      </Sheet.TabWrapper.Component>
      <Sheet.Content.Component css={Sheet.Content.css}>{content}</Sheet.Content.Component>
    </Sheet.Wrapper.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Tabs)
