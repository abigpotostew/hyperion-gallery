import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Link from 'next/link'

export const Header = () => {
  return (<>

    <Navbar bg="white" expand="lg">
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
        <Link href="/gallery"><a className={'nav-link'}>Gallery</a></Link>
      <Link href="/wallet"><a className={'nav-link'}>My NFTs</a></Link>
        <Link href="/about"><a className={'nav-link'}>About</a></Link>
      </Nav>



    </Container>


  </Navbar>
  < hr style={{'color':'black'}} />
   </>)
}
