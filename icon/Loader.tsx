import React, { SVGProps } from 'react'
import styled from '@emotion/styled'

export const enum Size {
  big,
  small,
}

interface ILoader {
  size: Size
}

const SVG = styled.svg<ILoader & SVGProps<SVGSVGElement>>`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: rotate 2s linear infinite;
  width: ${({ size }) => (size === Size.big ? 50 : 25)}px;
  height: ${({ size }) => (size === Size.big ? 50 : 25)}px;
`

const path = (size: Size) =>
  size === Size.big
    ? 'M90.258 70.129C82.87 84.876 67.618 95 50 95 25.147 95 5 74.853 5 50S25.147 5 50 5c17.617 0 32.87 10.124 40.258 24.871l4.473-2.237C86.522 11.25 69.575 0 50 0 22.386 0 0 22.386 0 50s22.386 50 50 50c19.575 0 36.522-11.249 44.731-27.634l-4.473-2.237z'
    : 'M85.785 67.892C79.218 81.002 65.66 90 50 90c-22.091 0-40-17.909-40-40s17.909-40 40-40c15.66 0 29.218 8.999 35.785 22.108l8.946-4.474C86.522 11.25 69.575 0 50 0 22.386 0 0 22.386 0 50s22.386 50 50 50c19.575 0 36.522-11.249 44.731-27.634l-8.946-4.474z'

export const Loader = ({ size = Size.big }: ILoader) => (
  <SVG viewBox="0 0 100 100" size={size}>
    <path fill="#000" fillRule="evenodd" d={path(size)} clipRule="evenodd" />
  </SVG>
)
