import React from 'react'
import { css as cssStyles, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { List } from './element/List'
import { Link, TextLink } from './element/Link'
import { Logo } from '../icon/Logo'
import { Space, Breakpoint } from '../style'
import { header, IHeader } from '../config'

const Wrapper = styled.header<{ css?: SerializedStyles }>`
  grid-column: 2 / 5;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  ${({ css }) => css}

  ${Breakpoint.Phone} {
    display: flex;
    flex-direction: column;
    gap: ${Space.medium};
  }
`

const Image = styled.img`
  color: blue;
  max-height: 100%;
`

const Meta = styled.nav<{ css?: SerializedStyles }>`
  color: black;
  grid-column: 2 / 3;
  justify-self: end;
  ${({ css }) => css}
`

const TitleText = styled.p`
  font-size: ${Space.medium};
  font-weight: bold;
  align-self: center;

  ${Breakpoint.Phone} {
    align-self: inherit;
  }
`

const TitleLink = styled(Link)`
  justify-self: start;
  display: flex;
  height: ${Space.large};
  ${({ css }) => css}
`

interface TitleProps {
  logo?: string
  title?: string
  link?: string
  css?: SerializedStyles
  children?: any
}

export const HeaderTitle = ({
  logo = null,
  title,
  link,
  css,
  children,
}: TitleProps) => {
  let content = <Logo />

  if (!logo && !children) {
    return <TitleText>{title}</TitleText>
  }

  if (logo) {
    content = <Image src={logo} />
  }

  if (children) {
    content = children
  }

  return (
    <TitleLink css={css} href={link}>
      {content}
    </TitleLink>
  )
}

interface Props {
  data?: IHeader
  logo?: string
  title?: string
  link?: string
  css?: SerializedStyles
  titleCss?: SerializedStyles
  metaCss?: SerializedStyles
  children?: any
}

export const Header = ({
  data = header,
  logo = null,
  title = 'naven',
  link = '/',
  css,
  titleCss,
  metaCss,
  children,
}: Props) => (
  <Wrapper css={css}>
    <HeaderTitle logo={logo} title={title} link={link} css={titleCss}>
      {children}
    </HeaderTitle>
    {data.links && (
      <Meta css={metaCss}>
        <List space={0} horizontal>
          {data.links.map((currentLink) => (
            <TextLink key={currentLink.url} href={currentLink.url}>
              {currentLink.name}
            </TextLink>
          ))}
        </List>
      </Meta>
    )}
  </Wrapper>
)
