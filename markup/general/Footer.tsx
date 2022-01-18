import React, { ReactNode, HTMLAttributes } from 'react'
import { naven } from '../../style'
import type { ComponentProps, Link, OptionalLink, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import TextLink from '../text/Link'
import List from '../element/List'
import { linkStyles } from '../element/Base'

export interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  type?: 'wide'
}

type Sheets = 'Main' | 'Column' | 'TextLink'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'footer',
    main: true,
    css: {
      display: 'flex',
      gridColumn: '3 / 4',
      flexWrap: 'wrap',
      rowGap: naven.theme.space.medium,
      variants: {
        type: {
          wide: {
            gridColumn: '2 / 5',
          },
        },
      },
    },
  },
  Column: {
    tag: 'div',
    css: {
      flexBasis: '25%',
      '@tablet': {
        flexBasis: '50%',
      },
      '@phone': {
        flexBasis: '100%',
      },
    },
  },
  TextLink: {
    tag: 'a',
    extends: [linkStyles()],
    css: { display: 'flex', marginBottom: naven.theme.space.small },
  },
})

export interface ColumnProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  children: ReactNode
  title: Link | OptionalLink
  links?: Link[]
}

const Footer = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props

  // eslint-disable-next-line react/no-unstable-nested-components
  const Column = ({ links, title, ...columnProps }: ColumnProps) => {
    if (!title && !links) {
      return children
    }

    return (
      <Sheet.Column.Component css={Sheet.Column.css}>
        <Sheet.TextLink.Component bold href={title.url} css={Sheet.TextLink.css}>
          {title.name}
        </Sheet.TextLink.Component>
        <List>
          {links.map((item, rowLinkIndex) => (
            <TextLink key={rowLinkIndex} href={item.url} styles={{ Main: { css: item.css } }}>
              {item.name}
            </TextLink>
          ))}
        </List>
        {columnProps.children}
      </Sheet.Column.Component>
    )
  }

  const processedChildren = typeof children === 'function' ? children({ Column }) : children

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {processedChildren}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Footer)
