import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { TextLink } from './element/Link'
import { List } from './element/List'
import { Space, Breakpoint } from '../style'
import { Link, OptionalLink } from '../types'

const ColumnWrapper = styled.div<{ css?: SerializedStyles }>`
  flex-basis: 25%;

  ${Breakpoint.Tablet} {
    flex-basis: 50%;
  }

  ${Breakpoint.Phone} {
    flex-basis: 100%;
  }

  ${({ css }) => css}
`

export interface FooterLinkRow {
  title: Link | OptionalLink
  links?: Link[]
  children?: JSX.Element
  css?: SerializedStyles
  listCss?: SerializedStyles
}

const Column = ({ links, title, css, listCss, children }: FooterLinkRow) => {
  if (!title && !links) {
    return children
  }

  return (
    <ColumnWrapper css={css}>
      <TextLink bold space={Space.medium} href={title.url} css={title.css}>
        {title.name}
      </TextLink>
      <List css={listCss}>
        {links.map((item, rowLinkIndex) => (
          <TextLink key={rowLinkIndex} href={item.url} css={item.css}>
            {item.name}
          </TextLink>
        ))}
      </List>
      {children}
    </ColumnWrapper>
  )
}

const Wrapper = styled.footer<{ css?: SerializedStyles; wide: boolean }>`
  grid-column: ${({ wide }) => (wide ? '2 / 5' : '3 / 4')};
  display: flex;
  flex-wrap: wrap;
  ${({ css }) => css}
`

export const Footer = ({
  css,
  wide = false,
  children,
  ...props
}: {
  css?: SerializedStyles
  wide?: boolean
  children?: ReactNode | ReactNode[]
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
  <Wrapper css={css} wide={wide} {...props}>
    {children}
  </Wrapper>
)

Footer.Column = Column
