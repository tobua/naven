import React from 'react'
import Select, { Props as SelectProps, StylesConfig, GroupBase } from 'react-select'
// @ts-ignore
import { naven, unit, cssVariable } from 'naven'

interface Props {
  containerStyles?: object
  backgroundColor?: string
}

const customStyles: ({
  containerStyles,
  backgroundColor,
}: Props) => StylesConfig<unknown, boolean, GroupBase<unknown>> = ({
  containerStyles,
  backgroundColor,
}) => ({
  container: (provided: object) => ({
    ...provided,
    minWidth: unit(200),
    ...containerStyles,
  }),
  valueContainer: (provided: object) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided: object) => ({
    ...provided,
    margin: 0,
  }),
  input: (provided: object) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  menu: (provided: object) => ({
    ...provided,
    background: backgroundColor,
    boxShadow: 'none',
  }),
  menuList: (provided: object) => ({
    ...provided,
    display: 'flex',
    flexDirection: 'column',
    gap: cssVariable(naven.theme.space.small),
  }),
  option: (provided: object, props) => ({
    ...provided,
    cursor: 'pointer',
    padding: 0,
    background: backgroundColor,
    fontWeight: props.isSelected ? cssVariable(naven.theme.font.weightBold) : 'inherit',
    color: cssVariable(naven.theme.color.backgroundContrast),
  }),
  control: (provided: object) => ({
    ...provided,
    borderWidth: 0,
    boxShadow: 'none',
    background: backgroundColor,
    minHeight: 'auto',
  }),
  dropdownIndicator: (provided: object) => ({
    ...provided,
    padding: 0,
    cursor: 'pointer',
  }),
})

export default function Dropdown({
  containerStyles,
  backgroundColor = cssVariable(naven.theme.color.background),
  ...props
}: Props & SelectProps) {
  return (
    <Select
      {...props}
      styles={{
        ...customStyles({ containerStyles, backgroundColor }),
        ...props.styles,
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: naven.theme.look.radius.value,
        colors: {
          ...theme.colors,
          primary: cssVariable(naven.theme.color.highlight),
        },
        ...props.theme,
      })}
    />
  )
}
