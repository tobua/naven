// npmjs.com/object-assign-deep modified to update CSSVariables used in this project.

const isCssVariable = (value: { type?: any }) =>
  Object.prototype.hasOwnProperty.call(value, 'token') &&
  Object.prototype.hasOwnProperty.call(value, 'value')

function getTypeOf(input) {
  if (input === null) {
    return 'null'
  }
  if (typeof input === 'undefined') {
    return 'undefined'
  }
  if (typeof input === 'object') {
    return Array.isArray(input) ? 'array' : 'object'
  }

  return typeof input
}

/*
 * Branching logic which calls the correct function to clone the given value base on its type.
 */
function cloneValue(value) {
  if (isCssVariable(value)) {
    return value
  }

  // The value is an object so lets clone it.
  if (getTypeOf(value) === 'object') {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return quickCloneObject(value)
  }

  if (getTypeOf(value) === 'array') {
    // The value is an array so lets clone it.
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return quickCloneArray(value)
  }

  // Any other value can just be copied.
  return value
}

/*
 * Enumerates the properties of the given object (ignoring the prototype chain) and returns a new object, with each of
 * its values cloned (i.e. references broken).
 */
function quickCloneObject(input) {
  if (isCssVariable(input)) {
    return input
  }

  const output = {}

  // eslint-disable-next-line no-restricted-syntax
  for (const key in input) {
    // eslint-disable-next-line no-prototype-builtins
    if (!input.hasOwnProperty(key)) {
      // eslint-disable-next-line no-continue
      continue
    }

    if (typeof input[key] !== 'undefined') {
      output[key] = cloneValue(input[key])
    }
  }

  return output
}

/*
 * Enumerates the given array and returns a new array, with each of its values cloned (i.e. references broken).
 */
function quickCloneArray(input) {
  if (isCssVariable(input)) {
    return input
  }

  return input.map(cloneValue)
}

const executeDeepMerge = (target: object, _objects: object[]) => {
  // Ensure we have actual objects for each.
  const objects = _objects.map((object) => object || {})
  const output = target || {}

  // Enumerate the objects and their keys.
  // eslint-disable-next-line no-plusplus
  for (let oindex = 0; oindex < objects.length; oindex++) {
    const object = objects[oindex] as any
    const keys = Object.keys(object)

    // eslint-disable-next-line no-plusplus
    for (let kindex = 0; kindex < keys.length; kindex++) {
      const key = keys[kindex]
      const value = object[key]
      const type = getTypeOf(value)
      const existingValueType = getTypeOf(output[key])

      if (type === 'object' && isCssVariable(value)) {
        output[key] = value
      } else if (type === 'object') {
        if (existingValueType !== 'undefined') {
          const existingValue = existingValueType === 'object' ? output[key] : {}
          output[key] = executeDeepMerge({}, [existingValue, quickCloneObject(value)])
        } else {
          output[key] = quickCloneObject(value)
        }
      } else if (type === 'array') {
        if (existingValueType === 'array') {
          const newValue = quickCloneArray(value)
          output[key] = newValue
        } else {
          output[key] = quickCloneArray(value)
        }
      } else {
        output[key] = value
      }
    }
  }

  return output
}

export const assign = (target, ...objects) => executeDeepMerge(target, objects)
