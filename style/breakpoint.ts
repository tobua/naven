import { IBreakpoint } from './types'

export const defaultBreakpoints: IBreakpoint = {
  phone: 500,
  tablet: 1000,
}

const breakpoints = defaultBreakpoints

export const configure = (newBreakpoints: IBreakpoint) => {
  Object.assign(breakpoints, newBreakpoints)
}

export const Phone = `@media (max-width: ${breakpoints.phone}px)`
export const Tablet = `@media (max-width: ${breakpoints.tablet}px)`

export const Breakpoint = (key: string) =>
  `@media (max-width: ${breakpoints[key]}px)`
