import { Container, Nav, Navbar} from "react-bootstrap"
import './Navv.css';

export const Navb = () => {
  return (
    <div className="Navv">
   
      <Navbar expand="md" className="neubar">
      <Container>
        <Navbar.Brand href="#" style={{ color: 'white' }}>
          <h2>Comic </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ml-auto">
         
            <Nav.Item>
              <Nav.Link style={{ color: 'white'}}  className="mx-2 custom-nav-link " href="/">
                Main
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: 'white'}} className="mx-2" href="/all"  >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: 'white'}}  className="mx-2" href="/genre">
                Genre
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: 'white'}}  className="mx-2" href="login.html">
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
