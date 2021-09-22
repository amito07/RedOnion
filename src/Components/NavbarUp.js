import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import Logo from '../Images/HeaderImage/logo2.png'
import './NavbarUp.css'
import CartAnimate from './CartAnimate'

function NavbarUp() {
    return (
        <header>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img className='nav-logo' src={Logo}/></Navbar.Brand>
                <Nav className="justify-content-end">
                {/* <Nav.Link href="#home">{CartAnimate}</Nav.Link> */}
                <Nav.Link className='nav-button' href="#features">Login</Nav.Link>
                <Nav.Link className='nav-button' href="#pricing">Sign up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
            
        </header>
    )
}

export default NavbarUp
