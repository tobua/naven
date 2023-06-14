import { ElementType } from 'react'
import memoize from 'memoize-one'
import type { CSS } from '@stitches/react'
import { useDeepMemo } from './use-deep-memo'
import { naven } from '../style'
import { mergeStyles } from './merge-styles'
import { initialize } from './initialize'
import type { CSSValue, Sheet } from '../types'

export interface DefaultProps {
  as?: ElementType<any>
  space?: CSSValue
}

export const createComponent = <Styles extends { Main: any }>(initialStyles: () => Styles) => {
  const stylesMemoized = memoize(initialStyles)
  return <Props extends { Component: any }>(
    markup: ({
      props,
      Sheet,
    }: {
      props: Props['Component']
      Sheet: Sheet<Styles, Props>
    }) => JSX.Element,
    watchProps?: (props: Props['Component']) => any[]
  ) => {
    const NavenComponent = (
      props: Props['Component'] &
        DefaultProps & {
          styles?: { [Property in keyof Styles]?: { css?: CSS } }
          css?: CSS
        }
    ) => {
      initialize()
      const {
        as: removeAs,
        space: removeSpace,
        styles: removeStyles,
        css: removeCss,
        ...safeProps
      } = props

      let defaultWatchProps: any[] = [removeStyles, removeCss]
      const spaceCustomized = stylesMemoized().Main && stylesMemoized().Main.space

      if (spaceCustomized) {
        defaultWatchProps.push(removeSpace)
      }

      if (watchProps) {
        const resolvedProps = watchProps(safeProps)
        defaultWatchProps = defaultWatchProps.concat(resolvedProps)
      }

      const Sheet = useDeepMemo(() => {
        const merged = mergeStyles(stylesMemoized(), removeStyles as Styles)

        const components = Object.keys(merged).reduce((previous, current) => {
          const styles = merged[current]
          const isMain = current === 'Main' || styles.Main
          let css: CSS = {}
          const base = styles.extends ?? (isMain ? removeAs : null) ?? styles.tag

          if (typeof styles.props === 'function') {
            styles.props(css, props)
          }

          if (isMain && removeCss) {
            css = mergeStyles(css, removeCss)
          }

          previous[current] = {
            Component: naven.styled(base, styles.css ?? {}),
            css,
          }

          return previous
        }, {}) as Sheet<Styles, Props>

        // TODO typeof only necessary if empty gap property added to Narrow without css or anything.
        if (spaceCustomized && typeof removeSpace !== 'undefined') {
          components.Main.css.gap = removeSpace

          if (
            typeof removeSpace === 'string' &&
            Object.keys(naven.theme.space).includes(removeSpace)
          ) {
            components.Main.css.gap = naven.theme.space[removeSpace]
          }
        }

        return components
      }, defaultWatchProps)

      return markup({ props: safeProps as Props, Sheet })
    }

    NavenComponent.styles = stylesMemoized

    // Assign component name for debugging and dev-tools.
    // @ts-ignore
    Object.defineProperty(NavenComponent, 'name', { value: markup.displayName ?? markup.name })

    return NavenComponent
  }
}
