import React, { Children, cloneElement, ReactNode } from 'react'
import { css as cssStyles, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { List } from '../element/List'
import { Link, TextLink } from '../element/Link'
import { Logo } from '../../icon/Logo'
import { Text } from '../element/Text'
import { Space, Breakpoint, Font, unit } from '../../style'
import { Navigation } from './Navigation'
import { Link as LinkType } from '../../types'

const Wrapper = styled.header<{ css?: SerializedStyles; wide: boolean }>`
  grid-column: ${({ wide }) => (wide ? '2 / 5' : '3 / 4')};
  display: grid;
  grid-template-columns: auto 1fr auto 1fr auto;
  grid-template-rows: auto auto;
  grid-row-gap: ${Space.medium};
  align-items: center;
  position: relative;

  ${Breakpoint.Phone} {
    grid-template-columns: auto;
    gap: ${Space.medium};
    /* TODO only if navigation links available */
    padding-right: ${Space.large};
  }

  ${({ css }) => css}
`

const Middle = styled.aside<{ css?: SerializedStyles; navigation?: boolean }>`
  grid-column: 3 / 3;
  justify-self: center;

  ${Breakpoint.Phone} {
    display: ${({ navigation = false }) => (!navigation ? 'none' : 'flex')};
  }

  ${({ css }) => css}
`

const MetaWrapper = styled.nav<{
  hideMobile?: boolean
  css?: SerializedStyles
  navigation?: boolean
}>`
  grid-column: 5 / 5;
  justify-self: end;

  ${Breakpoint.Phone} {
    display: ${({ navigation, hideMobile }) =>
      !navigation && hideMobile ? 'none' : 'flex'};
    grid-row: 2;
    justify-self: start;
    grid-column: 1/5;
  }

  ${({ css }) => css}
`

const Meta = ({
  links = [],
  hideMobile = false,
  navigation = false,
  css,
  children,
}: {
  links?: LinkType[]
  hideMobile?: boolean
  navigation?: boolean
  css?: SerializedStyles
  children?: ReactNode
}) => {
  if (children) {
    return (
      <MetaWrapper css={css} hideMobile={hideMobile} navigation={navigation}>
        {children}
      </MetaWrapper>
    )
  }

  if (!Array.isArray(links) || links.length < 1) {
    return null
  }

  return (
    <MetaWrapper css={css} hideMobile={hideMobile} navigation={navigation}>
      <List space={0} horizontal>
        {links.map((currentLink) => (
          <TextLink key={currentLink.url} href={currentLink.url}>
            {currentLink.name}
          </TextLink>
        ))}
      </List>
    </MetaWrapper>
  )
}

const mergeChildren = (children?: any) => {
  // Create a copy, so we can reassign.
  const newChildren = Children.map(
    Array.isArray(children) ? children : [children],
    (child) => child
  )
  // TODO type check fails when extended, perform deep check.
  const navigationIndex = children.findIndex(
    (child) => child.type === Navigation
  )
  const metaChild = children.find((child) => child.type === Meta)
  const middle = children.filter((child) => child.type === Middle)

  if (navigationIndex !== -1 && (middle.length || metaChild)) {
    const navigationProps = {
      middle: undefined,
      meta: undefined,
      key: 1234,
    }

    if (middle[0]) {
      navigationProps.middle = cloneElement(middle[0], {
        navigation: true,
      })
    }

    if (metaChild) {
      navigationProps.meta = cloneElement(metaChild, {
        navigation: true,
      })
    }

    newChildren[navigationIndex] = cloneElement(
      children[navigationIndex],
      navigationProps
    )
  }

  return newChildren
}

interface Props {
  css?: SerializedStyles
  wide?: boolean
  children?: any
}

export const Header = ({ css, wide = true, children }: Props) => (
  <Wrapper css={css} wide={wide}>
    {mergeChildren(children)}
  </Wrapper>
)

Header.Navigation = Navigation

const TitleText = styled(Text)`
  ${Font.size.large}
  align-self: center;

  ${Breakpoint.Phone} {
    align-self: inherit;
  }

  ${({ css }) => css}
`

const TitleLink = styled(Link)`
  justify-self: start;
  display: flex;
  ${({ css }) => css}
`

Header.Title = {
  Text: ({
    css,
    children = 'naven',
  }: {
    children?: string
    css?: SerializedStyles
  }) => (
    <TitleText bold css={css}>
      {children}
    </TitleText>
  ),
  Link: ({
    css,
    link = '/',
    children = <Logo css={cssStyles`height: ${unit(60)};`} />,
  }: {
    link?: string
    css?: SerializedStyles
    children?: ReactNode
  }) => (
    <TitleLink css={css} href={link}>
      {children}
    </TitleLink>
  ),
}

Header.Middle = Middle

Header.Meta = Meta
