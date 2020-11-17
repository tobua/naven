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

export const Title = ({ logo = null, title, link = '/', children = null }) => {
  let content = <Logo />

  if (logo) {
    content = <Image src={logo} />
  }

  if (title) {
    return <TitleText>{title}</TitleText>
  }

  if (children) {
    content = children
  }

  return <TitleLink href={link}>{content}</TitleLink>
}

export const Header = ({
  data = header,
  logo = null,
  title,
}: {
  data?: IHeader
  logo?: string
  title?: string
}) => (
  <Wrapper>
    <Title logo={logo} title={title} />
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
        {data.links.map((link) => (
          <TextLink key={link.url} href={link.url}>
            {link.name}
          </TextLink>
        ))}
      </List>
    </Meta>
  </Wrapper>
)
