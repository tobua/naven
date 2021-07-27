import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Space, SpaceSize } from '../../style'

export const Spacer = styled.hr<{ size?: SpaceSize; css?: SerializedStyles }>`
  height: ${({ size = 'medium' }) => Space[size]};
  border: none;
  margin: 0;
  ${({ css }) => css}
`
