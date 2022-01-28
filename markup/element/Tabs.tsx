import React, { useState, HTMLAttributes, ReactNode, DetailedHTMLProps } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    items: {
      title: string
      content: ReactNode
    }[]
    initialTab?: number
  } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  Tab: { state?: 'active' } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
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

export default createComponent(styles)<Props>(function Tabs({ props, Sheet }) {
  const { children, items, initialTab = 0, ...otherProps } = props
  const [tab, setTab] = useState(initialTab)
  const { content } = items[tab]

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      <Sheet.TabWrapper.Component css={Sheet.TabWrapper.css}>
        {items.map((_tab, index: number) => (
          <Sheet.Tab.Component
            css={Sheet.TabWrapper.css}
            key={index}
            tabIndex={0}
            state={index === tab ? 'active' : undefined}
            onKeyUp={(event) => event.key === 'Enter' && setTab(index)}
            onClick={() => setTab(index)}
          >
            {_tab.title}
          </Sheet.Tab.Component>
        ))}
      </Sheet.TabWrapper.Component>
      <Sheet.Content.Component css={Sheet.Content.css}>{content}</Sheet.Content.Component>
    </Sheet.Main.Component>
  )
})
