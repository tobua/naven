import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Space, Color, SpaceSize } from '../../style'

export const Spacer = styled.hr<{
  size?: SpaceSize
  line?: boolean
  css?: SerializedStyles
}>`
  height: ${({ size = 'medium' }) => Space[size]};
  border: none;
  margin: 0;
  position: relative;
  ${({ css }) => css}

  ${({ line = false }) =>
    line
      ? `:after {
    content: '';
    display: block;
    height: 1px;
    background: ${Color.backgroundContrast.var};
    width: 100%;
    position: absolute;
    top: calc(50% - 1px);
  }`
      : ''}
`
