import React, { AnchorHTMLAttributes, useMemo } from 'react'
import type { CSS } from '@stitches/react'
import { naven } from '../../style'

export default ({
  css,
  name,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { name: string; css?: CSS }) => {
  const Anchor = useMemo(() => naven.styled('a', css ?? {}), [css])
  return <Anchor id={name} css={css} {...props} />
}
