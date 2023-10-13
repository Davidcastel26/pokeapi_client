import React from 'react'
import { NavLink } from '../NavLink'
import ToggleColorMode from './btnColorMode'

export const MenuOverlay = () => {
    return (
      <ul className="flex flex-col py-4 items-center">
        <li >
            <NavLink to="/hero">Hero</NavLink>
        </li>
        <li>
            <NavLink to="/types">Types</NavLink>
        </li>
      </ul>
    )
  }