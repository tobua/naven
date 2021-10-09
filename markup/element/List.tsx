import React, { ReactNode, DetailedHTMLProps, LiHTMLAttributes } from 'react'
import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Space, toPx, spaceProp, unit } from '../../style'

enum ListType {
  ordered = 'ol',
  unordered = 'ul',
  description = 'dl',
}

type ListTypeInputs = ListType | 'ol' | 'ul' | 'dl'

const getPadding = (type: ListTypeInputs, horizontal?: boolean, listStyle?: boolean) => {
  if (horizontal || type === ListType.description || !listStyle) {
    return '0'
  }

  return unit(20)
}

const getListStyle = ({ listStyle, type }: { listStyle?: boolean; type: ListTypeInputs }) => {
  if (!listStyle || type === ListType.description) {
    return ''
  }

  return `list-style: ${type === ListType.ordered ? 'decimal' : 'disc'};`
}

const ListTag = (type: ListTypeInputs) => styled(type)<ListProps & { type: ListTypeInputs }>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'inherit')};
  row-gap: ${({ gap }) => toPx(gap)};
  column-gap: ${({ gap }) => toPx(gap)};
  overflow: ${({ wrap }) => (wrap ? 'visible' : 'auto')};
  padding-inline-start: ${({ horizontal, listStyle }) => getPadding(type, horizontal, listStyle)};

  ${getListStyle}
  ${spaceProp}
  ${({ css }) => css}
`

const ListElement = styled.li<{
  horizontal?: boolean
  listStyle?: boolean
  css?: SerializedStyles
}>`
  ${({ horizontal, listStyle }) => (horizontal && listStyle ? `margin-left: ${unit(20)};` : '')}
  ${({ css }) => css}
`

const ListDt = styled.dt<{ css?: SerializedStyles }>`
  ${({ css }) => css}
`

const ListDd = styled.dd<{ css?: SerializedStyles }>`
  margin-left: ${unit(20)};
  ${({ css }) => css}
`

const renderListElements = (
  children: ReactNode | ReactNode[],
  elementProps: any,
  horizontal?: boolean,
  listStyle?: boolean
) => {
  if (!Array.isArray(children)) {
    return [
      <ListElement key="0" listStyle={listStyle} horizontal={horizontal} {...elementProps}>
        {children}
      </ListElement>,
    ]
  }

  return children.map((child, index) => (
    <ListElement key={index} listStyle={listStyle} horizontal={horizontal} {...elementProps}>
      {child}
    </ListElement>
  ))
}

interface ListProps {
  horizontal?: boolean
  wrap?: boolean
  css?: SerializedStyles
  gap?: number | string
  children: ReactNode | ReactNode[]
  space?: string | number
  type?: ListTypeInputs
  listStyle?: boolean
  elementProps?: {
    css?: SerializedStyles
  } & DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
}

export const List = ({
  horizontal,
  children,
  elementProps,
  gap = Space.small,
  type = ListType.unordered,
  listStyle = false,
  ...props
}: ListProps) => {
  if (!children) {
    return null
  }

  const Wrapper = ListTag(type)
  const listElements =
    type === ListType.description
      ? children
      : renderListElements(children, elementProps, horizontal, listStyle)

  return (
    <Wrapper horizontal={horizontal} listStyle={listStyle} gap={gap} type={type} {...props}>
      {listElements}
    </Wrapper>
  )
}

// For dl tag, description lists.
List.Description = ({
  term,
  children,
}: {
  term: string | ReactNode
  children: string | ReactNode
}) => (
  <>
    <ListDt>{term}</ListDt>
    <ListDd>{children}</ListDd>
  </>
)

List.Type = ListType
