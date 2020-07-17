import React from 'react'
import styled from '@emotion/styled'
import { small } from '../style/space'

export const FooterWrapper = styled.footer`
  padding: ${small};
  background: lightgrey;
  grid-row: 4;
  grid-column: 3 / 4;
`

export const Footer = () => <FooterWrapper>Footer</FooterWrapper>
