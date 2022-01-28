import memoize from 'memoize-one'
import { naven } from '.'

export const blinkAnimation = memoize(() =>
  naven.keyframes({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  })
)
