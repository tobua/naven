import { assign } from './custom-object-assign-deep'

export const mergeStyles = <First extends object, Second extends object>(
  initial: First,
  user?: Second
) => {
  if (!user) {
    return initial
  }

  const initialCopy = { ...initial }

  return assign(initialCopy, user) as typeof initial & typeof user
}
