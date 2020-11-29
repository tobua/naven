import styled from '@emotion/styled'
import { Color, Space } from '../../style'

export const Input = styled.input`
  padding: ${Space.small};
  border: 1px solid ${Color.highlight};
  border-radius: ${Space.small};

  &:focus {
    border-width: 2px;
    margin-bottom: -2px;
    outline: none;
  }

  ${({ css }) => css}
`
