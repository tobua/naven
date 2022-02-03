import React, { HTMLAttributes, LiHTMLAttributes, ReactNode, Fragment, useCallback } from 'react'
import type { CSS } from '@stitches/react'
import { createComponent } from '../../utility/component'
import { naven, unit } from '../../style'

export interface Props {
  Component: {
    children: ReactNode | ReactNode[]
    horizontal?: true
    wrap?: true
    gap?: number | string
    type?: 'ordered' | 'description' | 'disc'
    elementProps?: LiHTMLAttributes<HTMLLIElement>
  } & HTMLAttributes<HTMLUListElement>
  Item: {
    children: ReactNode
  }
}

const styles = () => ({
  Main: {
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
    props: (innerStyles: CSS, props: Props['Component']) => {
      // if (props.type === 'ordered') {
      //   innerStyles.tag = 'ol'
      // }

      // if (props.type === 'description') {
      //   innerStyles.tag = 'dl'
      // }

      if (props.horizontal) {
        innerStyles.flexDirection = 'row'
      }

      if (props.wrap) {
        innerStyles.flexWrap = 'wrap'
        innerStyles.overflow = 'visible'
      }

      if (props.gap) {
        innerStyles.gap = props.gap
      }

      if ((props.type === 'ordered' || props.type === 'disc') && !props.horizontal) {
        innerStyles.paddingInlineStart = unit(20)
      }
    },
  },
  Item: {
    tag: 'li',
    css: {},
    props: (innerStyles, props: Props['Component']) => {
      if ((props.type === 'ordered' || props.type === 'disc') && props.horizontal) {
        innerStyles.marginLeft = unit(20)
      }
    },
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

export default createComponent(styles)<Props>(
  function List({ props, Sheet }) {
    const { children, horizontal, wrap, gap, ...otherProps } = props
    props.children = typeof children === 'function' ? children({ Description }) : children

    const renderItem = useCallback((innerChildren: ReactNode, key = 0) => {
      if (props.type === 'description') {
        return <Fragment key={key}>{innerChildren}</Fragment>
      }

      return (
        <Sheet.Item.Component css={Sheet.Item.css} key={key}>
          {innerChildren}
        </Sheet.Item.Component>
      )
    }, [])

    const renderItems = useCallback(() => {
      if (!Array.isArray(props.children)) {
        return [renderItem(props.children)]
      }

      return props.children.map((child, index) => renderItem(child, index))
    }, [])

    return (
      <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
        {renderItems()}
      </Sheet.Main.Component>
    )
  },
  (props) => [props.type, props.gap, props.wrap, props.horizontal]
)
