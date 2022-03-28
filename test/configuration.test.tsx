import { merge, create, register, naven } from '../index'

test('Highlight color can be configured.', () => {
  let avoidTypeCheckIssueWorkaround = create(merge({}))
  let { theme } = register(avoidTypeCheckIssueWorkaround)

  expect(theme.color.highlight.value).toEqual('#0047FF')
  expect(naven.theme.color.highlight.value).toEqual('#0047FF')

  avoidTypeCheckIssueWorkaround = create(
    merge({
      theme: {
        color: {
          highlight: '#FF00FF',
        },
      },
    })
  )

  theme = register(avoidTypeCheckIssueWorkaround).theme

  expect(theme.color.highlight.value).toEqual('#FF00FF')
  expect(naven.theme.color.highlight.value).toEqual('#FF00FF')
})

test('Other values remain untouched.', () => {
  let avoidTypeCheckIssueWorkaround = create(merge({}))
  let { theme, config } = register(avoidTypeCheckIssueWorkaround)

  expect(theme.color.interact.value).toEqual('#FF007A')
  expect(theme.color.gray300.value).toEqual('#E0E0E0')
  expect(theme.space.medium.value).toContain('20px')
  // @ts-ignore
  expect(config.media.phone).toContain('500px')
  avoidTypeCheckIssueWorkaround = create(
    merge({
      theme: {
        color: {
          highlight: '#FF00FF',
        },
      },
    })
  )
  // NOTE not better way to reassign multiple variables.
  ;({ theme, config } = register(avoidTypeCheckIssueWorkaround))

  expect(theme.color.interact.value).toEqual('#FF007A')
  expect(theme.color.gray300.value).toEqual('#E0E0E0')
  expect(theme.space.medium.value).toContain('20px')
  // @ts-ignore
  expect(config.media.phone).toContain('500px')
})

test('Properties without units are "responsified".', () => {
  let avoidTypeCheckIssueWorkaround = create(merge({}))
  let { theme } = register(avoidTypeCheckIssueWorkaround)

  expect(theme.font.sizeMedium.value).toContain('calc')
  expect(theme.font.sizeMedium.value).toContain('16px')
  expect(theme.font.sizeMedium.value).not.toContain('18px')
  expect(theme.space.tiny.value).toContain('calc')
  // Also contains '5px' in rounding of digits.
  expect(theme.space.tiny.value).toContain(' 5px')
  expect(theme.space.tiny.value).not.toContain('10px')
  expect(theme.look.radius.value).toBe('0')

  avoidTypeCheckIssueWorkaround = create(
    merge({
      theme: {
        font: {
          sizeMedium: 18,
        },
        space: {
          tiny: 10,
        },
        look: {
          radius: 5,
        },
      },
    })
  )

  theme = register(avoidTypeCheckIssueWorkaround).theme

  expect(theme.font.sizeMedium.value).toContain('calc')
  expect(theme.font.sizeMedium.value).not.toContain('16px')
  expect(theme.font.sizeMedium.value).toContain('18px')
  expect(theme.space.tiny.value).toContain('calc')
  expect(theme.space.tiny.value).not.toContain(' 5px')
  expect(theme.space.tiny.value).toContain('10px')
  expect(theme.look.radius.value).toContain('5px')

  avoidTypeCheckIssueWorkaround = create(
    merge({
      theme: {
        font: {
          sizeMedium: '18vw',
        },
        space: {
          tiny: '10vh',
        },
        look: {
          radius: '5rem',
        },
      },
    })
  )

  // No responsification for values with units.
  theme = register(avoidTypeCheckIssueWorkaround).theme

  expect(theme.font.sizeMedium.value).toBe('18vw')
  expect(theme.space.tiny.value).toBe('10vh')
  expect(theme.look.radius.value).toBe('5rem')
})

test('Can add additional variables.', () => {
  const avoidTypeCheckIssueWorkaround = create(
    merge({
      theme: {
        color: {
          brandNew: '#FF00FF',
        },
      },
      breakpoint: {
        desktop: 1500,
      },
    })
  )
  const { theme, config } = register(avoidTypeCheckIssueWorkaround)

  expect(theme.color.interact.value).toEqual('#FF007A')
  expect(theme.color.brandNew.value).toEqual('#FF00FF')
  // @ts-ignore
  expect(config.media.phone).toContain('500px')
  // @ts-ignore
  expect(config.media.desktop).toContain('1500px')
})
