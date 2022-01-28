import { naven, register, create, merge } from '../style'

export const initialize = () => {
  if (typeof naven === 'undefined') {
    console.log(
      '%cnaven:',
      'color: #0047FF; font-weight: bold',
      `no configuration detected, initializing @stitches/react with defaults on 'body' root.`
    )
    // INFO TypeScript compiler super slow without extra variable.
    const stitches = create(merge({}))
    register(stitches, 'body')
  }
}
