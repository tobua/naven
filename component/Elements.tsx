import React from 'react'
import styled from '@emotion/styled'
import { small } from '../style/space'
import { black } from '../style/color'

export const Link = styled.a`
  text-decoration: none;
`

export const TextLink = styled.a`
  color: ${black};
  text-decoration: none;
`

type ListProps = {
  horizontal?: boolean
}

export const List = styled.ul<ListProps>(
  {
    listStyle: 'none',
    display: 'flex',
  },
  ({ horizontal }) => ({
    flexDirection: horizontal ? 'row' : 'column',
  })
)
