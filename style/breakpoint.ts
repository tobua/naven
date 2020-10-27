import { IBreakpoint } from './types'

export const Breakpoints: IBreakpoint = {
  phone: 500,
  tablet: 1000,
}

export const configure = (_breakpoints: IBreakpoint) => {
  Object.assign(Breakpoints, _breakpoints, { clone: false })
}

export const Breakpoint = new Proxy<{ Phone: string; Tablet: string }>({} as any, {
  get: (_, property) => {
    if (property === 'Phone') {
      return `@media (max-width: ${Breakpoints.phone}px)`
    }

    if (property === 'Tablet') {
      return `@media (max-width: ${Breakpoints.tablet}px)`
    }

    return '@media screen'
  }
})
