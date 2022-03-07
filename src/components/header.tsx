import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './header.css'

export const Header = () => {
  return (<><Navbar bg="white" expand="lg">
    <Container>

          <Navbar.Brand href="/">
            {/*<img*/}
            {/*  alt=""*/}
            {/*  src="/logo.jpg"*/}
            {/*  width="50"*/}
            {/*  height="50"*/}
            {/*  className="d-inline-block align-top"*/}
            {/*/>{' '}*/}
            <div className={'Header-title-container'}>
            <h2 className={'Header-title'}>Hyperion</h2>
              <h3 className={'Header-subtitle'}>on Stargaze</h3>
            </div>

          </Navbar.Brand>

      {/*<Navbar.Brand href="#home">Hyperion</Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Nav className="me-auto">
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/wallet">My NFTs</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>

    </Container>


  </Navbar>
  < hr style={{'color':'black'}} />
   </>)
}
