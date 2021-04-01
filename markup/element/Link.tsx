import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Color } from '../../style'

export const Link = styled.a<{ css?: SerializedStyles }>`
  text-decoration: none;
  color: ${Color.black};
  ${({ css }) => css}
`

export const TextLink = styled.a<{ css?: SerializedStyles; bold?: boolean }>`
  cursor: pointer;
  color: ${Color.black};
  text-decoration: none;
  ${({ bold }) => (bold ? 'font-weight: bold;' : '')}

  &:hover {
    text-decoration: underline;
    color: ${Color.interact};
  }

  &:focus {
    outline: none;
    text-decoration: underline;
    color: ${Color.interact};
  }

  ${({ css }) => css}
`
