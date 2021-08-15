import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Space, spaceProp, toPx } from '../style'

interface DirectionProps {
  space?: number | string
  gap?: number | string
  css?: SerializedStyles
}

export const Horizontal = styled.div<{ wrap?: boolean } & DirectionProps>`
  display: flex;
  ${({ wrap = false, gap = Space.medium }) =>
    wrap ? `flex-wrap: wrap; row-gap: ${gap};` : ''}
  overflow: visible;
  column-gap: ${({ gap = Space.medium }) => toPx(gap)};
  ${spaceProp}
  ${({ css }) => css}
`

export const Vertical = styled.div<DirectionProps>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ gap = Space.medium }) => toPx(gap)};
  ${spaceProp}
  ${({ css }) => css}
`

export const Tiles = styled.div`
  display: flex;
`

export const Narrow = styled.div<{ css?: SerializedStyles }>`
  grid-column: 3;
  ${({ css }) => css}
`

export const Wide = styled.div<{ css?: SerializedStyles }>`
  grid-column: 1 / 6;
  ${({ css }) => css}
`
