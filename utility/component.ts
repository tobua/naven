import { useMemo, ElementType } from 'react'
import memoize from 'memoize-one'
import type { CSS } from '@stitches/react'
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
        DefaultProps & { styles?: { [Property in keyof Styles]?: { css?: CSS } }; css?: CSS }
    ) => {
      initialize()
      const {
        as: removeAs,
        space: removeSpace,
        styles: removeStyles,
        css: removeCss,
        ...safeProps
      } = props

      const defaultWatchProps: any[] = [removeStyles]
      const spaceCustomized = stylesMemoized().Main && stylesMemoized().Main.space

      if (spaceCustomized) {
        defaultWatchProps.push(removeSpace)
      }

      if (watchProps) {
        defaultWatchProps.push(watchProps)
      }

      const Sheet = useMemo(() => {
        const merged = mergeStyles(stylesMemoized(), removeStyles as Styles)

        const components = Object.keys(merged).reduce((previous, current) => {
          const styles = merged[current]
          const isMain = current === 'Main' || styles.Main
          let css: CSS = {}

          if (typeof styles.props === 'function') {
            styles.props(css, props)
          }

          if (isMain && removeCss) {
            css = mergeStyles(css, removeCss)
          }

          previous[current] = {
            Component: naven.styled(
              styles.extends ?? styles.tag, // isMain && propsAs ? propsAs :
              styles.css ?? {}
            ),
            css,
          }

          return previous
        }, {}) as Sheet<Styles, Props>

        if (spaceCustomized) {
          components.Main.css.gap = removeSpace
        }

        return components
      }, defaultWatchProps)

      return markup({ props: safeProps as Props, Sheet })
    }

    NavenComponent.styles = stylesMemoized

    return NavenComponent
  }
}
