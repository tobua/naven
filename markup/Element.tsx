import React from 'react'
import '@emotion/core'
import styled from '@emotion/styled'
import { Space } from '../style'

export { Spacer } from './element/Spacer'
export { Input } from './element/Input'
export { Loader } from './element/Loader'
export { Button } from './element/Button'
export { Link, TextLink } from './element/Link'
export { Alert } from './element/Alert'

// any because 'as' tag is missing in @emotion types.
export const Heading = styled.h1<any>`
  font-size: ${({ as = 'h1' }) => {
    if (as === 'h1') {
      return '30px'
    }

    if (as === 'h2') {
      return '24px'
    }
  }};
  margin-bottom: 20px;
`

export const Paragraph = styled.p`
  margin-bottom: 30px;
`

type ListProps = {
  horizontal?: boolean
  children: any[]
}

const ListUl = styled.ul<ListProps>(
  {
    display: 'flex',
  },
  ({ horizontal }) => ({
    flexDirection: horizontal ? 'row' : 'column',
  })
)

const ListLi = styled.li`
  padding: ${Space.small};
`

export const List = ({ horizontal, children }: ListProps) => (
  <ListUl horizontal={horizontal}>
    {children.map((child, index) => (
      <ListLi key={index}>{child}</ListLi>
    ))}
  </ListUl>
)
