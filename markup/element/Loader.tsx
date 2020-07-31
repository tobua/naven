import React from 'react'
import styled from '@emotion/styled'
import * as Icon from '../../icon/Loader'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`

interface ILoader {
  small?: boolean
}

export const Loader = ({ small }: ILoader) => (
  <Wrapper>
    <Icon.Loader size={small ? Icon.Size.small : Icon.Size.big} />
  </Wrapper>
)
