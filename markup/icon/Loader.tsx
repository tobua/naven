import React, { SVGProps, useMemo } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    size?: 'small'
  } & SVGProps<SVGSVGElement>
  Main: {
    size?: 'small'
  } & SVGProps<SVGSVGElement>
}

const styles = () => ({
  Main: {
    tag: 'svg',
    main: true,
    css: {
      width: 50,
      height: 50,
      variants: {
        size: {
          small: {
            width: 25,
            height: 25,
          },
        },
      },
    },
  },
})

const path = (size?: string) =>
  size !== 'small'
    ? 'M90.258 70.129C82.87 84.876 67.618 95 50 95 25.147 95 5 74.853 5 50S25.147 5 50 5c17.617 0 32.87 10.124 40.258 24.871l4.473-2.237C86.522 11.25 69.575 0 50 0 22.386 0 0 22.386 0 50s22.386 50 50 50c19.575 0 36.522-11.249 44.731-27.634l-4.473-2.237z'
    : 'M85.785 67.892C79.218 81.002 65.66 90 50 90c-22.091 0-40-17.909-40-40s17.909-40 40-40c15.66 0 29.218 8.999 35.785 22.108l8.946-4.474C86.522 11.25 69.575 0 50 0 22.386 0 0 22.386 0 50s22.386 50 50 50c19.575 0 36.522-11.249 44.731-27.634l-8.946-4.474z'

export default createComponent(styles)<Props>(function Loader({ props, Sheet }) {
  const { children, size, ...otherProps } = props

  const rotate = useMemo(
    () =>
      naven.keyframes({
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      }),
    []
  )

  return (
    <Sheet.Main.Component
      viewBox="0 0 100 100"
      css={{ animation: `${rotate} 2s linear infinite`, ...Sheet.Main.css }}
      size={size}
      {...otherProps}
    >
      <path fill="#000" fillRule="evenodd" d={path(size)} clipRule="evenodd" />
    </Sheet.Main.Component>
  )

  //   return (
  //     <Vector xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" {...props}>
  //       <g stroke={props.color ?? naven.theme.color.backgroundContrast.value} strokeWidth="20">
  //         <path d="M7.071 6.929L113.137 112.995" />
  //         <path d="M6.929 112.995L112.995 6.929" />
  //       </g>
  //     </Vector>
  //   )
})
