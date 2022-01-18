import React, { HTMLAttributes, ReactElement } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[]
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
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
  },
})

const getColumnCount = (children: ReactElement[]) =>
  Math.max(...children.filter(Boolean).map((child) => child?.props?.children?.length))

const Table = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {children}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(
  styles,
  Table,
  (allStyles, props) => {
    const columns = getColumnCount(props.children)

    // First row, nth-of-type won't work.
    allStyles.Main.css[`& > *:nth-child(-n + ${columns})`] = {
      fontWeight: naven.theme.font.weightBold,
    }

    allStyles.Main.css.gridTemplateColumns = `repeat(${columns}, 1fr)`
  },
  (props) => [props.children]
)
