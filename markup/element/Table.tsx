import React, { HTMLAttributes, ReactElement } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    children: ReactElement[]
  } & HTMLAttributes<HTMLDivElement>
}

const getColumnCount = (children: ReactElement[]) =>
  Math.max(...children.filter(Boolean).map((child) => child?.props?.children?.length))

const styles = () => ({
  Main: {
    tag: 'div',
    main: true,
    css: {
      display: 'grid',
      justifyItems: 'start',
      gridGap: naven.theme.space.small,
      background: naven.theme.color.gray300,
      borderRadius: naven.theme.look.radius,
      padding: naven.theme.space.small,
    },
    props: (allStyles, props) => {
      const columns = getColumnCount(props.children)

      // First row, nth-of-type won't work.
      allStyles[`& > *:nth-child(-n + ${columns})`] = {
        fontWeight: naven.theme.font.weightBold,
      }

      allStyles.gridTemplateColumns = `repeat(${columns}, 1fr)`
    },
  },
})

export default createComponent(styles)<Props>(
  function Table({ props, Sheet }) {
    const { children, ...otherProps } = props

    return (
      <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
        {children}
      </Sheet.Main.Component>
    )
  },
  (props) => [props.children]
)
