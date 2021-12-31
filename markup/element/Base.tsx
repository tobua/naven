import memoize from 'memoize-one'
import { naven } from '../../style'

export const linkStyles = memoize(() => ({
  textDecoration: 'none',
  color: naven.theme.color.backgroundContrast,
  cursor: 'pointer',
}))

export const textStyles = memoize(() => ({
  fontFamily: naven.theme.font.familyRegular,
  fontSize: naven.theme.font.sizeMedium,
}))

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
