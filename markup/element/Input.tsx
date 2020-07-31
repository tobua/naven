import styled from '@emotion/styled'
import * as Space from '../../style/space'
import { primary } from '../../style/color'

export const Input = styled.input`
  width: 100%;
  padding: ${Space.small};
  border: 1px solid ${primary};
  border-radius: ${Space.small};

  &:focus {
    border-width: 2px;
    margin-bottom: -2px;
    outline: none;
  }
`
