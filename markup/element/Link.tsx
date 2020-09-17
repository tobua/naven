import styled from '@emotion/styled'
import { Color } from '../../style'

export const Link = styled.a`
  text-decoration: none;
`

export const TextLink = styled.a`
  cursor: pointer;
  color: ${Color.black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${Color.interact};
  }

  &:focus {
    outline: none;
    text-decoration: underline;
    color: ${Color.interact};
  }
`
