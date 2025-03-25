import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, Outlet } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="black" variant="light" className="border-bottom" sticky="top">

                <Navbar.Brand>
                    <Link to="/" className="text-decoration-none text-black">
                        <li className="mx-4 text-decoration-none text-white"> Resume Builder</li>
                    </Link>
                </Navbar.Brand>

                <Nav className="me-auto ">
                    <NavLink to="/" className="mx-4 text-decoration-none text-white">Home</NavLink>
                    <NavLink to="/details" className="mx-3 text-decoration-none text-white">Details</NavLink>
                    <NavLink to="/about" className="mx-3 text-decoration-none text-white">About US</NavLink>
                </Nav>

            </Navbar>
            <Outlet />
        </>
    )
}

export default NavbarComponent;