import React from 'react'
import styled from '@emotion/styled'

// TODO with mock

const Wrapper = styled.img`
  display: flex;
`

interface IImage {
  src: string
}

export const Image = ({ src }: IImage) => <Wrapper src={src} />
