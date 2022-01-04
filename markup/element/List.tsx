import React, { HTMLAttributes, LiHTMLAttributes, ReactNode, Fragment } from 'react'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import { naven, unit } from '../../style'

export interface Props extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode | ReactNode[]
  horizontal?: true
  wrap?: true
  gap?: number | string
  type?: 'ordered' | 'description' | 'disc'
  elementProps?: LiHTMLAttributes<HTMLLIElement>
}

type Sheets = 'List' | 'Item'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  List: {
    tag: 'ul',
    main: true,
    css: {
      display: 'flex',
      flexDirection: 'column',
      paddingInlineStart: 0,
      listStyle: 'none',
      gap: naven.theme.space.small,
      variants: {
        type: {
          ordered: {
            listStyle: 'decimal',
          },
          description: {
            listStyle: 'auto',
          },
          disc: {
            listStyle: 'disc',
          },
        },
      },
    },
  },
  Item: {
    tag: 'li',
    css: {},
  },
})

// For dl tag, description lists.
const Description = ({
  term,
  children,
}: {
  term: string | ReactNode
  children: string | ReactNode
}) => (
  <>
    <dt>{term}</dt>
    <dd style={{ marginLeft: 20 }}>{children}</dd>
  </>
)

const renderItem = ({ Sheet, props }: ComponentProps<Sheets>, children: ReactNode, key = 0) => {
  if (props.type === 'description') {
    return <Fragment key={key}>{children}</Fragment>
  }

  return (
    <Sheet.Item.Component css={Sheet.Item.css} key={key}>
      {children}
    </Sheet.Item.Component>
  )
}

const renderItems = ({ Sheet, props }: ComponentProps<Sheets>) => {
  if (!Array.isArray(props.children)) {
    return [renderItem({ Sheet, props }, props.children)]
  }

  return props.children.map((child, index) => renderItem({ Sheet, props }, child, index))
}

const List = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, horizontal, wrap, gap, ...otherProps } = props
  props.children = typeof children === 'function' ? children({ Description }) : children

  return (
    <Sheet.List.Component css={Sheet.List.css} {...otherProps}>
      {renderItems({ Sheet, props })}
    </Sheet.List.Component>
  )
}

export default createComponent<Props, Sheets>(
  styles,
  List,
  (allStyles, props) => {
    if (props.type === 'ordered') {
      allStyles.List.tag = 'ol'
    }

    if (props.type === 'description') {
      allStyles.List.tag = 'dl'
    }

    if (props.horizontal) {
      allStyles.List.css.flexDirection = 'row'
    }

    if (props.wrap) {
      allStyles.List.css.flexWrap = 'wrap'
      allStyles.List.css.overflow = 'visible'
    }

    if (props.gap) {
      allStyles.List.css.gap = props.gap
    }

    if (props.type === 'ordered' || props.type === 'disc') {
      if (props.horizontal) {
        allStyles.Item.css.marginLeft = unit(20)
      } else {
        allStyles.List.css.paddingInlineStart = unit(20)
      }
    }
  },
  (props) => [props.type]
)
