import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Space, spaceProp, toPx } from '../style'

interface DirectionProps {
  space?: number | string
  gap?: number | string
}

export const Horizontal = styled.div<DirectionProps>`
  display: flex;
  overflow: auto;
  column-gap: ${({ gap = Space.medium }) => toPx(gap)};
  ${spaceProp}
`

export const Vertical = styled.div<DirectionProps>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ gap = Space.medium }) => toPx(gap)};
  ${spaceProp}
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
