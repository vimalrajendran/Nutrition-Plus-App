import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';

import { useNavigate } from "react-router-dom";

export default function Nav1() {
    let navigate = useNavigate();
    const user = localStorage.getItem("token");
    console.log(user)

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
                        {
                            !user ? <div><Button className='ms-2' variant='secondary' onClick={() => navigate('/login')}><LoginSharpIcon /> Login</Button>
                                <Button className='ms-2' variant='secondary' onClick={() => navigate('/signup')}><PersonAddSharpIcon /> Register</Button></div>
                                :
                                <NavDropdown className="mx-5"
                                    id="nav-dropdown-dark-example"
                                    title={<AccountBoxSharpIcon />}
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Favourites
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">LogOut</NavDropdown.Item>
                                </NavDropdown>

                        }

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}