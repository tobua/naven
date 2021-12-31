import React from 'react'
import { ComponentProps, Component } from '../types'

// Separate TSX file to render JSX, as TSX for component.ts wouldn't support generic methods.
export const render = <Sheets extends string>(
  sheet: ComponentProps<Sheets>['Sheet'],
  props: ComponentProps<Sheets>['props'],
  Markup: Component<Sheets>
) => <Markup Sheet={sheet} props={props} />
