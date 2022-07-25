import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';

export default function Nav2() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid>
                    <Navbar.Brand href="#" style={{ 'marginTop': "10px" }}> <FastfoodIcon style={{ 'marginBottom': "10px" }} /> Nutrition Plus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>

                        </Nav>
                        <Nav>
                        <NavDropdown className="mx-5"
                                id="nav-dropdown-dark-example"
                                title= {<AccountBoxSharpIcon/>}
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Favourites
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">LogOut</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        {/* <Button className='ms-2' variant='secondary'>Login</Button>
                        <Button className='ms-2' variant='secondary'>Register</Button> */}

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}