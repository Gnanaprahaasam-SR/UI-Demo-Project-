import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LuUser2 } from "react-icons/lu";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GoHeart } from "react-icons/go";


function Header() {
    return (
        <Navbar expand="lg" className="" style={{ backgroundColor: "#FEBB9D", color: "#3A3A3A" }}>
            <Container fluid>
                <Navbar.Brand href="#">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 gap-3 mx-auto"
                        style={{ maxHeight: '100px', fontWeight: "600", fontSize: "17px", color: "#3A3A3A" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Catalog</Nav.Link>
                        <Nav.Link href="#action2">Blog</Nav.Link>
                        <Nav.Link href="#action2">About us</Nav.Link>
                    </Nav>
                    <div className="d-flex gap-3" style={{ fontWeight: "500" }}>
                        <span><LuUser2 /> Sign </span>
                        <span><GoHeart />
                            <span class="badge rounded-circle" style={{ backgroundColor: "#FF5572", color: "white" }}>4</span>Wishlist</span>
                        <span><PiShoppingCartSimpleBold /><span class="badge rounded-circle" style={{ backgroundColor: "#FF5572", color: "white" }}>4</span> Cart</span>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;