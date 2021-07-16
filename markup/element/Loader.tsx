import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import * as Icon from '../../icon/Loader'
import { spaceProp } from '../../style'

const Wrapper = styled.div<{ space?: string | number; css?: SerializedStyles }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  ${spaceProp}
  ${({ css }) => css}
`

interface ILoader {
  small?: boolean
  css?: SerializedStyles
  space?: string | number
}

export const Loader = ({
  small,
  css,
  space = 0,
  ...props
}: ILoader &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) => (
  <Wrapper css={css} space={space} {...props}>
    <Icon.Loader size={small ? Icon.Size.small : Icon.Size.big} />
  </Wrapper>
)
