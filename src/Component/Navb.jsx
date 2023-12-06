import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import './Navv.css';

export const Navb = () => {
  return (
    <div className="Navv">
   <img src="" alt="" />
        <Navbar expand="lg" className="">
      <Container className="Navv">
        <Navbar.Brand  href="/">Latest Manhwa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/detail">detail test</Nav.Link>
            <Nav.Link href="/AllPage">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
