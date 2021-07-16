import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Color } from '../../style'

export const Link = styled.a<{ css?: SerializedStyles }>`
  text-decoration: none;
  color: ${() => Color.backgroundContrast};
  ${({ css }) => css}
`

export enum Underline {
  none,
  regular,
  animated,
  background,
}

const getTextLinkColor = ({ underline = Underline.regular }) => {
  if (underline === Underline.regular) {
    return Color.interact
  }

  return Color.backgroundContrast
}

const getTextLinkHoverColor = ({ underline = Underline.regular }) => {
  if (underline === Underline.animated) {
    return Color.backgroundContrast
  }

  if (underline === Underline.background) {
    return Color.colorContrast
  }

  return Color.interact
}

const getTextLinkUnderline = ({ underline = Underline.regular }) => {
  if (underline === Underline.background) {
    return `background-image: linear-gradient(
      120deg,
      ${Color.highlight} 0%,
      ${Color.interact} 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 3px;
    background-position: 0 100%;
    transition: background-size 0.3s ease-in, color 0.3s ease;`
  }

  if (underline === Underline.animated) {
    return `background-image: linear-gradient(transparent calc(100% - 2px), black 10px);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size 1s;
    font-weight: bold;`
  }

  return ''
}

const getTextLinkUnderlineHover = ({ underline = Underline.regular }) => {
  if (underline === Underline.regular) {
    return 'text-decoration: underline;'
  }

  if (underline === Underline.animated) {
    return 'background-size: 100% 100%;'
  }

  return ''
}

export const TextLink = styled.a<{
  css?: SerializedStyles
  bold?: boolean
  underline?: Underline
}>`
  cursor: pointer;
  text-decoration: none;
  ${({ bold }) => (bold ? 'font-weight: bold;' : '')}
  color: ${getTextLinkColor};
  ${getTextLinkUnderline}

  &:hover,
  &:focus {
    outline: none;
    background-size: 100% 88%;
    color: ${getTextLinkHoverColor};
    ${getTextLinkUnderlineHover}
  }

  ${({ css }) => css}
`
