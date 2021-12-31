import { useState, useEffect } from 'react'
import { IBreakpoint } from './types'

export const Breakpoint: IBreakpoint = {
  phone: 500,
  tablet: 1000,
}

const maxWidthQuery = (pixels: number) => `(max-width: ${pixels}px)`
const minWidthQuery = (pixels: number) => `(min-width: ${pixels + 1}px)`

// export const configure = (_breakpoints: IBreakpoint) => {
//   Object.assign(Breakpoints, _breakpoints, { clone: false })
// }

// export const Breakpoint = new Proxy<{ Phone: string; Tablet: string }>({} as any, {
//   get: (_, property) => {
//     if (property === 'Phone') {
//       return `@media ${maxWidthQuery(Breakpoints.phone)}`
//     }

//     if (property === 'Tablet') {
//       return `@media ${maxWidthQuery(Breakpoints.tablet)}`
//     }

//     return '@media screen'
//   },
// })

type BreakpointWithPixel = {
  name: keyof IBreakpoint | null
  pixels: number
}

const getLargestBreakpoint = () =>
  Object.entries(Breakpoint).reduce((result, current) => {
    if (current[1] > result) {
      return current[1]
    }

    return result
  }, 0)

const getMatcher = (currentPixels, entries: [string, number][], index: number) => {
  if (!index) {
    return maxWidthQuery(currentPixels)
  }

  const previousPixels = entries[index - 1][1]

  return `${minWidthQuery(previousPixels)} and ${maxWidthQuery(currentPixels)}`
}

const attachBreakpointListeners = (setBreakpoint: (point: BreakpointWithPixel) => void) => {
  const largestBreakpoint = getLargestBreakpoint()
  const entries = Object.entries(Breakpoint)
  const matchers = entries.map(([name, pixels], index) => ({
    match: matchMedia(getMatcher(pixels, entries, index)),
    name,
    pixels,
  }))

  matchers.push({
    match: matchMedia(minWidthQuery(largestBreakpoint)),
    name: null,
    pixels: 9999,
  })

  matchers.forEach((matcher) => {
    if (matcher.match.matches) {
      setBreakpoint(matcher)
    }

    matcher.match.addEventListener('change', (event) => {
      if (event.matches) {
        setBreakpoint(matcher)
      }
    })
  })
}

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<BreakpointWithPixel>({
    name: null,
    pixels: 9999,
  })

  useEffect(attachBreakpointListeners.bind(null, setBreakpoint), [])

  return { breakpoint: breakpoint.name, pixels: breakpoint.pixels }
}
