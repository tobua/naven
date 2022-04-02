import { mergeStyles } from '../index'

test('Correctly merges top-level styles.', () => {
  const result = mergeStyles({ display: 'none' }, { display: 'flex' })

  expect(result.display).toEqual('flex')
})

test('Correctly merges nested styles.', () => {
  const result = mergeStyles({ '@phone': { display: 'none' } }, { '@phone': { display: 'flex' } })

  expect(result['@phone'].display).toEqual('flex')
})

test('Correctly merges nested styles not present initially.', () => {
  const result = mergeStyles({ display: 'none' }, { '@phone': { display: 'flex' } })

  expect(result.display).toEqual('none')
  expect(result['@phone'].display).toEqual('flex')
})
