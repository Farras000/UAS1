import { Container, Row, Col } from 'react-bootstrap';

export const Foot = () => {
  return (
    <footer className=" mt-5" style={{backgroundColor:'#00393D', color:'#FFF7D6'}}>
    <Container >
      <Row className="py-4">
        <Col md={6}>
          <h5>Rawread</h5>
          <p> when life is rough pray
           </p>
        </Col>
        <Col md={3}>
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#home" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <h5>Contact</h5>
          <ul className="list-unstyled">
            <li>Email: damen@student.umn.ac.id</li>
            <li>Phone: +123 456 7890</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="text-center p-3" style={{ backgroundColor: '#374366' }}>
      © {new Date().getFullYear()} Damen Co, Ltd.
    </div>
  </footer>
  )
}
