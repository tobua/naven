import { Fragment } from 'react'
import { Text, Table, InlineCode } from 'naven'

export const PropertyTable = ({
  space = true,
  css = true,
  children,
}: {
  children?: any
  space?: boolean
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

  if (space) {
    contents.push(
      <Fragment key="space">
        <Text>space</Text>
        <InlineCode>Space.medium</InlineCode>
        <InlineCode>string | number</InlineCode>
      </Fragment>
    )
  }

  if (css) {
    contents.push(
      <Fragment key="css">
        <Text>css</Text>
        <Text>Empty</Text>
        <InlineCode>SerializedStyles</InlineCode>
      </Fragment>
    )
  }

  return <Table>{contents}</Table>
}
