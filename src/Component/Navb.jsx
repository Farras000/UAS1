import { Container, Nav, Navbar} from "react-bootstrap"
import './Navv.css';

export const Navb = () => {
  
  return (
    <div className="Navv">
   
      <Navbar expand="md" className="neubar">
      <Container>
        <Navbar.Brand href="/" style={{ color: '#FFF7D6' }}>
          <h2>Rawread </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ml-auto nav-item  ">
         
            <Nav.Item>
              <Nav.Link style={{ color: '#FFF7D6'}}  className="mx-2 custom-nav-link " href="/">
                Main
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: '#FFF7D6'}} className="mx-2" href="/popular"  >
                Popular
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: '#FFF7D6'}}  className="mx-2 " href="/genre">
                Genre
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: '#FFF7D6'}}  className="mx-2 active" href="/us">
                About Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
