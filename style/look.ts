import assign from 'object-assign-deep'
import { wasser } from 'wasser'
import { toPx } from './utility'
import { ILook } from './types'

export const Look: ILook = {
  corner: 0,
}

export const configure = (_look: ILook) => {
  assign(Look, _look)
}

export const radius = (divider = 1) => {
  if (!Look.corner) {
    return ''
  }

  if (typeof Look.corner === 'number') {
    return `border-radius: ${wasser(Look.corner / divider)};`
  }

  const value = Number(Look.corner.replace(/[^-\d.]/g, ''))
  const unit = Look.corner.replace(/[-\d.\s]/g, '')

  return `border-radius: ${value / divider}${unit};`
}

export const radiusValue = () => {
  if (!Look.corner) {
    return '0'
  }

  if (typeof Look.corner === 'number') {
    return wasser(Look.corner)
  }

  return Look.corner
}

export const radiusStyleProp = () =>
  Look.corner ? { borderRadius: toPx(Look.corner) } : {}
