import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

export const Horizontal = styled.div`
  display: flex;
  overflow: auto;
`

export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
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
