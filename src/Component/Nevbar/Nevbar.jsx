import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CseSociety from '../Image/CSE SOCITY.jpg';
const Nevbar = () => {
    return (
        <Navbar className='bg-cyan-500 md:h-70 sm:h-62 lg:h-36' expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="h-20 w-20 mr-24">
                    <img src={CseSociety} alt="" className='img-fluid ' srcset="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto font text-xl text-white md:ml-56 lg:ml-60 xl:ml-72">
                        <Nav.Link href="#home" className='text-white ml-4'>Home</Nav.Link>
                        <Nav.Link href="#Event" className='text-white ml-4'>Event</Nav.Link>
                        <Nav.Link href="#About" className='text-white ml-4'>About</Nav.Link>
                        <Nav.Link href="#Contact" className='text-white ml-4'>Contract</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Nevbar;