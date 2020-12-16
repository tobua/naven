import React, { Fragment } from 'react'
import { Element } from 'naven'

const { Text, Table } = Element

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
        <Text>Space.medium</Text>
        <Text>string | number</Text>
      </Fragment>
    )
  }

  if (css) {
    contents.push(
      <Fragment key="css">
        <Text>css</Text>
        <Text>Empty</Text>
        <Text>SerializedStyles</Text>
      </Fragment>
    )
  }

  return <Table>{contents}</Table>
}
