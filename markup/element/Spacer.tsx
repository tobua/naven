import styled from '@emotion/styled'
import * as Space from '../../style/space'

export const Spacer = styled.hr<{ size?: Space.Space }>`
  height: ${({ size = 'medium' }) => Space[size]};
  border: none;
`
