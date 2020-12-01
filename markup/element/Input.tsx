import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Color, Space } from '../../style'

export const Input = styled.input<{ css?: SerializedStyles }>`
  padding: ${Space.small};
  border: 1px solid ${Color.black};
  border-radius: ${Space.small};

  &:focus {
    border-width: 2px;
    /* Offset shift due to border size change. */
    margin-top: -1px;
    margin-bottom: -1px;
    outline: none;
  }

  ${({ css }) => css}
`
