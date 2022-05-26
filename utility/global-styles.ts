export const resetStyles = (stitches: { theme: any }) => ({
  // TODO switch to https://unpkg.com/modern-normalize@1.1.0/modern-normalize.css (pretty big though)
  // Reset ported over from emotion-reset.
  [`html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed,
      figure, figcaption, footer, header, hgroup,
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video`]: {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
  [`article, aside, details, figcaption, figure,
      footer, header, hgroup, menu, nav, section`]: {
    diplay: 'block',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  body: {
    margin: stitches.theme.space.medium,
    fontFamily: '-apple-system, Helvetica, Arial, sans-serif',
    lineHeight: 1.2,
    backgroundColor: stitches.theme.color.background,
    color: stitches.theme.color.backgroundContrast,
  },
  '::selection': {
    background: stitches.theme.color.highlight,
    color: stitches.theme.color.colorContrast,
  },
})

export const rootStyles = (stitches: { theme: any }) => ({
  display: 'grid',
  rowGap: stitches.theme.space.medium,
  gridTemplateColumns:
    'auto minmax(0, 250px) calc(1000px - 2 * var(--space-large)) minmax(0, 250px) auto',
  fontSize: stitches.theme.font.sizeMedium,
  '@tablet': {
    gridTemplateColumns: '0 0 1fr 0 0',
  },
})
