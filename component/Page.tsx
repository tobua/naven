import React from 'react'
import styled from '@emotion/styled'

export const Header = styled.header`
  background: blue;
`

export const Title = styled.h1`
  color: red;
`

export const SubTitle = styled.h2`
  color: blue;
`

export const Page = () => (
  <Header>
    <Title>Strappd</Title>
    <SubTitle>CSS Framework</SubTitle>
  </Header>
)
