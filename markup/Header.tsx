import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link, TextLink, List } from './Element'
import { showMobileNavigation } from './Navigation'
import { Logo } from '../icon/Logo'
import { Menu } from '../icon/Menu'
import { Close } from '../icon/Close'
import { Space, Breakpoint } from '../style'
import { header, IHeader } from '../config'

export const Wrapper = styled.header`
  grid-column: 2 / 5;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
`

export const Image = styled.img`
  color: blue;
  max-height: 100%;
`

export const Meta = styled.nav`
  color: black;
  grid-column: 2 / 3;
  justify-self: end;
`

export const TitleText = styled.p`
  font-size: ${Space.medium};
  font-weight: bold;
  align-self: center;
`

const TitleLink = styled(Link)`
  justify-self: start;
  display: flex;
  height: ${Space.large};
`

export const ToggleIconWrapper = styled.div`
  display: flex;
`

const ToggleIcon = () => {
  const [open, setOpen] = useState(false)
  const toggleNavigation = () => {
    setOpen(!open)
    showMobileNavigation(!open)
  }

  const iconStyles = css`
    cursor: pointer;
    width: ${Space.medium};
    height: ${Space.medium};
    display: none;

    ${Breakpoint.Phone} {
      display: flex;
    }
  `

  return (
    <ToggleIconWrapper>
      {open ? (
        <Close onClick={toggleNavigation} css={iconStyles} />
      ) : (
        <Menu onClick={toggleNavigation} css={iconStyles} />
      )}
    </ToggleIconWrapper>
  )
}

interface TitleProps {
  logo?: string
  title?: string
  link?: string
  children?: any
}

export const Title = ({ logo = null, title, link, children }: TitleProps) => {
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

  return <TitleLink href={link}>{content}</TitleLink>
}

interface Props {
  data?: IHeader
  logo?: string
  title?: string
  link?: string
  children?: any
}

export const Header = ({
  data = header,
  logo = null,
  title = 'naven',
  link = '/',
  children,
}: Props) => (
  <Wrapper>
    <Title logo={logo} title={title} link={link}>
      {children}
    </Title>
    <Meta>
      <ToggleIcon />
      <List
        css={css`
          ${Breakpoint.Phone} {
            display: none;
          }
        `}
        horizontal
      >
        {data.links.map((currentLink) => (
          <TextLink key={currentLink.url} href={currentLink.url}>
            {currentLink.name}
          </TextLink>
        ))}
      </List>
    </Meta>
  </Wrapper>
)
