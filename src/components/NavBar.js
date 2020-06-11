import React from "react"
import {Menu, MenuItem} from "semantic-ui-react"
import {Link} from "react-router-dom"

const NavBar = () =>{
  return(
    <Menu>
      <Link to='/'>
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>
      <Link to='/javier'>
        <Menu.Item>
          Javier
        </Menu.Item>
      </Link>
      <Link to='/shawn'>
        <Menu.Item>
          Shawn
        </Menu.Item>
      </Link>
      <Link to='/joey'>
        <Menu.Item>
          Joey
        </Menu.Item>
      </Link>
    </Menu>
  )
}

export default NavBar