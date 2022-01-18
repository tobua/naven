import { Fragment } from 'react'
import { Text, Table, InlineCode } from 'naven'
import { theme } from '../configuration'

export const PropertyTable = ({
  css = true,
  children,
}: {
  children?: any
  space?: boolean | number
  css?: boolean
}) => {
  const contents = [
    <Fragment key="head">
      <Text>Property</Text>
      <Text>Default</Text>
      <Text>Values</Text>
    </Fragment>,
  ]

  if (!children) {
  } else if (children.length > 1) {
    contents.push(...children)
  } else {
    contents.push(children)
  }

  if (css) {
    contents.push(
      <Fragment key="css">
        <Text>css</Text>
        <Text>Empty</Text>
        <InlineCode>CSS</InlineCode>
      </Fragment>
    )
  }

  return <Table css={{ background: theme.color.gray200 }}>{contents}</Table>
}
