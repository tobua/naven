export const uniqueID = () =>
  // eslint-disable-next-line no-bitwise
  (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
