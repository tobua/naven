import { updateGlobalCSSVariables } from '../markup/global/Dynamic'

export const createCssVariable = (name: string, initialValue: string) => {
  let currentValue = initialValue
  return {
    get value() {
      return currentValue
    },
    set value(newValue: string) {
      if (updateGlobalCSSVariables) {
        updateGlobalCSSVariables({
          [this.name]: newValue,
        })
      }
      currentValue = newValue
    },
    var: `var(--${name})`,
    name: `--${name}`,
    type: '__css-variable',
  }
}
