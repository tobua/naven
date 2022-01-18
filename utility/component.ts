import { useMemo, ReactNode, ElementType } from 'react'
import memoize from 'memoize-one'
import type { CSS } from '@stitches/react'
import { naven } from '../style'
import { mergeStyles } from './merge-styles'
import { render } from './markup'
import type {
  Component,
  ComponentStylesUser,
  ComponentStylesDefinition,
  ComponentProps,
  CSSValue,
} from '../types'

export interface DefaultProps {
  children?: ReactNode
  as?: ElementType<any>
  space?: CSSValue
}

export const createComponent = <Props, Sheets extends string>(
  initialStyles: ComponentStylesDefinition<Props, Sheets>,
  Markup: Component<Sheets>,
  afterStyles?: (styles: any, props: Props) => void,
  watchProps?: (props: Props) => any[]
) => {
  const stylesMemoized = memoize(initialStyles)

  function Result(
    props: Props & { styles?: ComponentStylesUser<Props, Sheets>; css?: CSS } & DefaultProps
  ) {
    const defaultWatchProps: any[] = [props.styles]

    // @ts-ignore
    const spaceCustomized = stylesMemoized().Main && stylesMemoized().Main.space

    if (spaceCustomized) {
      defaultWatchProps.push(props.space)
    }

    const sheet = useMemo(
      () => {
        const merged = mergeStyles(stylesMemoized(), props.styles) as ComponentStylesUser<
          Props,
          Sheets
        >

        const components = {}

        Object.keys(merged).forEach((key) => {
          const isMain = key === 'Main' || merged[key].main
          let css: CSS = {}

          if (Array.isArray(merged[key].extends) && merged[key].extends.length) {
            merged[key].extends.forEach((styles: CSS) => {
              css = mergeStyles(styles, css) as CSS
            })
          }

          if (typeof merged[key].props === 'function') {
            merged[key].props(css, props)
          }

          // TODO probably better with after styles.
          if (isMain && props.css) {
            merged[key].css = mergeStyles(merged[key].css ?? {}, props.css)
          }

          components[key] = {
            Component: naven.styled(
              isMain && props.as ? props.as : merged[key].tag,
              merged[key].css ?? {}
            ),
            css,
          }
        })

        if (afterStyles) {
          afterStyles(components, props)
        }

        if (spaceCustomized) {
          // @ts-ignore
          components.Main.css.gap = props.space
        }

        return components as ComponentProps<Sheets>['Sheet']
      },
      watchProps ? defaultWatchProps.concat(watchProps(props)) : defaultWatchProps
    )

    // Extract props to be passed over (props is sealed for modification).
    const { styles, css, space, ...safeProps } = props

    return render<Sheets>(sheet, safeProps, Markup)
  }

  Result.styles = stylesMemoized

  return Result
}
