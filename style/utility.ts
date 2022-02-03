import { font } from 'wasser'

export const mapNumbersToWasserSizes = (properties) => {
  if (typeof properties !== 'object') {
    return
  }

  Object.keys(properties).forEach((key) => {
    const value = properties[key]

    if (typeof value === 'number') {
      properties[key] = font(value)
    }
  })
}
