import styled from '@emotion/styled'
import { black, interact } from '../../style/color'

export const Link = styled.a`
  text-decoration: none;
`

export const TextLink = styled.a`
  cursor: pointer;
  color: ${black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${interact};
  }

  &:focus {
    outline: none;
    text-decoration: underline;
    color: ${interact};
  }
`
