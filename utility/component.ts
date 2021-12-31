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
} from '../types'

export interface DefaultProps {
  children?: ReactNode
  as?: ElementType<any>
}

export const createComponent = <Props, Sheets extends string>(
  initialStyles: ComponentStylesDefinition<Props, Sheets>,
  Markup: Component<Sheets>,
  afterStyles?: (styles: any, props: Props) => void,
  watchProps?: (props: Props) => any[]
) => {
  const stylesMemoized = memoize(initialStyles)

  function Result(props: Props & { styles?: ComponentStylesUser<Props, Sheets> } & DefaultProps) {
    const defaultWatchProps = [props.styles]
    const sheet = useMemo(
      () => {
        const merged = mergeStyles(stylesMemoized(), props.styles) as ComponentStylesUser<
          Props,
          Sheets
        >

        const components = {}

        Object.keys(merged).forEach((key) => {
          let css: CSS = {}

          if (Array.isArray(merged[key].extends) && merged[key].extends.length) {
            merged[key].extends.forEach((styles: CSS) => {
              css = mergeStyles(styles, css) as CSS
            })
          }

          if (typeof merged[key].props === 'function') {
            merged[key].props(css, props)
          }

          components[key] = {
            Component: naven.styled(
              merged[key].main && props.as ? props.as : merged[key].tag,
              merged[key].css ?? {}
            ),
            css,
          }
        })

        if (afterStyles) {
          afterStyles(components, props)
        }

        return components as ComponentProps<Sheets>['Sheet']
      },
      watchProps ? defaultWatchProps.concat(watchProps(props)) : defaultWatchProps
    )

    // Extract props to be passed over (props is sealed for modification).
    const { styles, ...safeProps } = props

    return render<Sheets>(sheet, safeProps, Markup)
  }

  Result.styles = stylesMemoized

  return Result
}
