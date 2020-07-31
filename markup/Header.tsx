import React from 'react'
import styled from '@emotion/styled'
import { Link, TextLink, List } from './Element'
import { Logo } from '../icon/Logo'
import { medium } from '../style/space'

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
  font-size: ${medium};
  font-weight: bold;
  align-self: center;
`

const TitleLink = styled(Link)`
  justify-self: start;
`

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

export const Header = ({ logo = null, title }) => (
  <Wrapper>
    <Title logo={logo} title={title} />
    <Meta>
      <List horizontal>
        <TextLink href="/">HTML</TextLink>
        <TextLink href="/">CSS</TextLink>
        <TextLink href="/">JavaScript</TextLink>
      </List>
    </Meta>
  </Wrapper>
)
