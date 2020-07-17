import React from 'react'
import styled from '@emotion/styled'
import { small } from '../style/space'
import { Link, TextLink, List } from './Elements'

export const Wrapper = styled.header`
  padding: ${small};
  background: lightgrey;
  grid-column: 2 / 5;
`

export const Image = styled.img`
  //
`

export const Meta = styled.nav`
  //
`

const LogoPlaceholder = () => (
  <svg
    width="200"
    height="100"
    viewBox="0 0 500 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.18399 97C10.464 95.848 15.216 95.272 19.44 95.272C23.664 95.272 27.168 95.368 29.952 95.56V102.76C32.352 100.744 35.52 99.112 39.456 97.864C43.488 96.52 47.328 95.848 50.976 95.848C60.384 95.848 66.96 98.056 70.704 102.472C74.544 106.888 76.464 114.52 76.464 125.368V153.016C80.208 154.456 82.848 156.088 84.384 157.912L82.944 169H49.824L48.384 157.912C49.728 156.088 52.368 154.456 56.304 153.016V124.504C56.304 119.32 55.44 115.864 53.712 114.136C52.08 112.312 49.104 111.4 44.784 111.4C40.464 111.4 36.144 112.936 31.824 116.008V153.016C35.568 154.456 38.208 156.088 39.744 157.912L38.304 169H5.18399L3.74399 157.912C5.08799 156.088 7.72799 154.456 11.664 153.016V112.984C8.30399 111.832 5.66399 110.2 3.74399 108.088L5.18399 97Z"
      fill="black"
    />
    <path
      d="M92.2646 107.656C92.2646 106.216 92.3126 104.68 92.4086 103.048C101.337 98.248 110.937 95.848 121.209 95.848C131.481 95.848 138.825 97.816 143.241 101.752C147.753 105.592 150.009 112.024 150.009 121.048V151.72C153.369 152.392 156.009 153.208 157.929 154.168V166.696C153.033 169 146.025 170.152 136.905 170.152C135.945 167.656 135.129 164.632 134.457 161.08C130.329 167.128 122.841 170.152 111.993 170.152C105.561 170.152 100.041 168.28 95.4326 164.536C90.9206 160.792 88.6646 155.704 88.6646 149.272C88.6646 142.84 90.7766 137.8 95.0006 134.152C99.3206 130.408 105.705 128.536 114.153 128.536H129.849V121.624C129.849 114.136 125.865 110.392 117.897 110.392C114.921 110.392 112.473 110.68 110.553 111.256C110.361 115.288 109.785 118.408 108.825 120.616H94.7126C93.0806 117.256 92.2646 112.936 92.2646 107.656ZM118.185 155.464C123.081 155.464 126.969 154.024 129.849 151.144V139.336H119.769C112.857 139.336 109.401 141.976 109.401 147.256C109.401 149.656 110.121 151.624 111.561 153.16C113.097 154.696 115.305 155.464 118.185 155.464Z"
      fill="black"
    />
    <path
      d="M274.6 239.7H225.1L151.3 64.2C136.3 59.4 126.25 53.55 121.15 46.65L125.65 12H229.15L233.65 46.65C229.75 51.45 223.3 55.8 214.3 59.7L238.6 127.65C244 141.75 247.9 155.7 250.3 169.5L251.2 175.8H257.5C259.9 160.8 264.1 145.05 270.1 128.55L293.95 61.95C282.85 57.75 275.05 52.65 270.55 46.65L275.05 12H374.05L378.55 46.65C373.15 53.55 363.25 59.4 348.85 64.2L274.6 239.7Z"
      fill="black"
    />
    <path
      d="M383.054 170.152C371.534 170.152 362.846 167.08 356.99 160.936C351.23 154.792 348.35 145.864 348.35 134.152C348.35 127.048 349.358 120.952 351.374 115.864C353.39 110.68 356.126 106.696 359.582 103.912C366.302 98.536 374.126 95.848 383.054 95.848C391.982 95.848 398.798 98.152 403.502 102.76C408.302 107.272 410.702 115.432 410.702 127.24C410.702 134.152 407.294 137.608 400.478 137.608H369.23C369.614 143.656 371.15 147.928 373.838 150.424C376.622 152.92 380.99 154.168 386.942 154.168C390.206 154.168 393.326 153.784 396.302 153.016C399.278 152.248 401.438 151.48 402.782 150.712L404.798 149.56L409.118 161.08C408.542 161.752 407.678 162.616 406.526 163.672C405.47 164.632 402.686 165.976 398.174 167.704C393.758 169.336 388.718 170.152 383.054 170.152ZM392.126 124.792C392.318 123.448 392.414 121.816 392.414 119.896C392.414 117.976 391.646 115.96 390.11 113.848C388.574 111.64 385.886 110.536 382.046 110.536C378.302 110.536 375.422 111.688 373.406 113.992C371.39 116.296 370.046 120.184 369.374 125.656L392.126 124.792Z"
      fill="black"
    />
    <path
      d="M419.543 97C424.823 95.848 429.575 95.272 433.799 95.272C438.023 95.272 441.527 95.368 444.311 95.56V102.76C446.711 100.744 449.879 99.112 453.815 97.864C457.847 96.52 461.687 95.848 465.335 95.848C474.743 95.848 481.319 98.056 485.063 102.472C488.903 106.888 490.823 114.52 490.823 125.368V153.016C494.567 154.456 497.207 156.088 498.743 157.912L497.303 169H464.183L462.743 157.912C464.087 156.088 466.727 154.456 470.663 153.016V124.504C470.663 119.32 469.799 115.864 468.071 114.136C466.439 112.312 463.463 111.4 459.143 111.4C454.823 111.4 450.503 112.936 446.183 116.008V153.016C449.927 154.456 452.567 156.088 454.103 157.912L452.663 169H419.543L418.103 157.912C419.447 156.088 422.087 154.456 426.023 153.016V112.984C422.663 111.832 420.023 110.2 418.103 108.088L419.543 97Z"
      fill="black"
    />
  </svg>
)

export const Title = ({ logo = null, title, link = '/', children = null }) => {
  let content = <LogoPlaceholder />

  if (logo) {
    content = <Image src={logo} />
  }

  if (children) {
    content = children
  }

  return <Link href={link}>{content}</Link>
}

export const Header = ({ logo = null, title }) => (
  <Wrapper>
    <Title logo={logo} title={title} />
    <Meta>
      <List horizontal>
        <li>
          <TextLink href="/">About</TextLink>
        </li>
        <li>
          <TextLink href="/">Login</TextLink>
        </li>
      </List>
    </Meta>
  </Wrapper>
)
