import { Navbar, Container, Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Header() {
    const router = useRouter();
    return (
      <Navbar collapseOnSelect className="bg-white border-bottom header" bg="light" expand="lg" sticky="top">
        <Container>
            <Navbar.Brand className="theme-color" href="/">
              <img src="/DevClust.jpg" alt="DevClust" />
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                  <Nav.Link className="theme-color" href="/">Home</Nav.Link>
                  <Nav.Link className="theme-color" href="/contact-us">Contact US</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;
