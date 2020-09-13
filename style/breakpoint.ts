import { Style } from '.'

export const Phone = `@media (max-width: ${Style.breakpoints.phone}px)`
export const Tablet = `@media (max-width: ${Style.breakpoints.tablet}px)`

export const Breakpoint = (key: string) =>
  `@media (max-width: ${Style.breakpoints[key]}px)`
