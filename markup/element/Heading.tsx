import styled from '@emotion/styled'

// any because 'as' tag is missing in @emotion types.
export const Heading = styled.h1<any>`
  font-size: ${({ as = 'h1' }) => {
    if (as === 'h1') {
      return '30px'
    }

    if (as === 'h2') {
      return '24px'
    }

    return '20px'
  }};
  margin-bottom: ${({ noSpace }) => (noSpace ? '0' : '20px')};
`
