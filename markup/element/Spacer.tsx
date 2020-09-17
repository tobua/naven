import styled from '@emotion/styled'
import { Space, SpaceSize } from '../../style'

export const Spacer = styled.hr<{ size?: SpaceSize }>`
  height: ${({ size = 'medium' }) => Space[size]};
  border: none;
  margin: 0;
`
