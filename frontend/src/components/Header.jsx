import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
// import SearchBox from './SearchBox'
// import { logout } from '../redux/actions/userActions'
import logo from '../assets/logo-crowdar.png'
import { Logo } from '../styles/styles'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Button = styled(Link)`
  margin-right: 2rem;
  display: inline;
  font-size: 1.1rem;
  padding: .5rem 0;
  text-decoration: none;
  /* background-color: #2E2E2E; */
  color: #E2E2E2;

  &:hover {
    cursor: pointer;
    border-bottom: .15rem solid;
    color: lightblue;
  }
`

function Header() {

    // const userLogin = useSelector(state => state.userLogin)
    // const { userInfo } = userLogin

    // const dispatch = useDispatch()

    // const logoutHandler = () => {
    //     dispatch(logout())
    // }

    return (
        <Navbar className='bg-primary' bg="dark" variant="dark" expand="lg" collapseOnSelect style={{ minWidth: '250px' }}>
            <Container >
                <Logo to='/'>
                    <img src={logo} alt="logo crowdar" />
                </Logo>
                <Nav className="ml-auto">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Button to="/user/login">Login</Button>
                            <Button to="/user/register">Register</Button>
                            <Button to="/base/documentos">Documentos</Button>
                            <Button to="/base/owners">Owners</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header
