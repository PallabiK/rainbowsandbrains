import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements'
import logo from '../../images/logow.png'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="rainbowsandbrains logo"/>
                </NavLink>
                {/* <Bars /> */}
                <NavMenu>
                    <NavLink exact to="/" activeStyle>Home</NavLink>
                    <NavLink to="/about" activeStyle>About</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
