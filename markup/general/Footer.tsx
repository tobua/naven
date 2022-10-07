import React, { ReactNode, HTMLAttributes, AnchorHTMLAttributes, useCallback } from 'react'
import { naven } from '../../style'
import type { Link, OptionalLink } from '../../types'
import { createComponent } from '../../utility/component'
import List from '../element/List'
import TextLink from '../text/Link'

export interface Props {
  Component: {
    children: ReactNode | (({ Column }) => JSX.Element)
    type?: 'wide'
  }
  TextLink: {
    bold?: boolean
  } & AnchorHTMLAttributes<HTMLAnchorElement>
}

const styles = () => ({
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
    extends: TextLink,
    css: { display: 'flex', marginBottom: naven.theme.space.small },
  },
})

export interface ColumnProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  children: ReactNode
  title: Link | OptionalLink
  links?: Link[]
}

export default createComponent(styles)<Props>(function Footer({ props, Sheet }) {
  const { children, ...otherProps } = props

  const Column = useCallback(({ links = [], title, ...columnProps }: ColumnProps) => {
    if (!title && !links) {
      return children
    }

    return (
      <Sheet.Column.Component css={Sheet.Column.css}>
        {title && (
          <Sheet.TextLink.Component bold href={title.url} css={Sheet.TextLink.css}>
            {title.name}
          </Sheet.TextLink.Component>
        )}
        {links.length > 0 && (
          <List>
            {links.map((item, rowLinkIndex) => (
              <TextLink key={rowLinkIndex} href={item.url} css={item.css}>
                {item.name}
              </TextLink>
            ))}
          </List>
        )}
        {columnProps.children}
      </Sheet.Column.Component>
    )
  }, [])

  const processedChildren = typeof children === 'function' ? children({ Column }) : children

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {processedChildren}
    </Sheet.Main.Component>
  )
})
