import type { CSS } from '@stitches/react'
import { assign } from './custom-object-assign-deep'

export const mergeStyles = (initial: CSS, user?: CSS) => {
  if (!user) {
    return initial
  }

  const initialCopy = { ...initial }

  return assign(initialCopy, user)
}
