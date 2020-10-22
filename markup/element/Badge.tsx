import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  position: relative;
`

const Dot = styled.div`
    position: absolute;
    left: 0;
    top: 0;
`

interface IBadge {
    children: any
}

export const Badge = ({children}: IBadge) => <Wrapper><Dot />{children}</Wrapper>

// As wrapper for any element, absolute positioned, with optional count.