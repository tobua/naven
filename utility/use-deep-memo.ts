import { useRef } from 'react'
import equal from 'fast-deep-equal'

// Publish as use-deep-memo?
export const useDeepMemo = <T>(calculateValue: () => T, dependencies: any[]) => {
  const val = useRef(calculateValue())
  const prevDependencies = useRef<any>([])
  if (!equal(dependencies, prevDependencies.current)) {
    val.current = calculateValue()
    prevDependencies.current = [...dependencies]
  }
  return val.current
}
