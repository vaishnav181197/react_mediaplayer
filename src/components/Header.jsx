import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>

            <Navbar className="bg-info container-fluid">
                <Container >
                    <Link to={'/'} style={{textDecoration:'none'}}>
                        <Navbar.Brand className='text-light' >
                            <i className="fas fa-cloud-upload-alt"></i>
                            Media Player
                        </Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header