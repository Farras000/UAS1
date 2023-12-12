import { Card, Button } from "react-bootstrap"

export const AboutUs = () => {
  return (
<div className="about-section">
      <h1>About Us Page</h1>
      <p>Some text about who we are and what we do.</p>
      <p>Resize the browser window to see that this page is responsive, by the way.</p>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <div className="row">
        {/* Person 1 */}
        <div className="col-md-4">
          <div className="card aspect-ratio-4:3">
            <img src="/w3images/team1.jpg" alt="Ravyanda Farras" className="card-img-top" />
            <div className="card-body text-center">
              <h2>Ravyanda Farras</h2>
              <p className="title">Front-end, Back-end, UI/UX Designer, Project Manager, Content Writer, PPT</p>
              <p>Intinya saya pusing mengerjakan semua ini</p>
              <p>f4rras106@gmail.com</p>
              <a href="https://www.instagram.com/farrasibrhm/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">Instagram</button>
              </a>
            </div>
          </div>
        </div>

        {/* Person 2 */}
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/18528278/pexels-photo-18528278/free-photo-of-model-posing-on-street-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
       
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

        {/* Person 3 */}
        <div className="col-md-4">
          <div className="card aspect-ratio-4:3">
            <img src="/w3images/team3.jpg" alt="Ase" className="card-img-top" />
            <div className="card-body text-center">
              <h2>Ase</h2>
              <p className="title">Bantuin Elisa</p>
              <p>nungguin jakew kelamaan + legok macet + salah itung dikit gk ngaruh</p>
              <p>john@example.com</p>
              <a href="https://.com/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">Instagram</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{marginTop: 'px'}} className="row"  >
        {/* Person 4 */}
        <div className="col-md-6">
          <div className="card aspect-ratio-4:3">
            <div className="card-body text-center">
              <h2>Elisa</h2>
              <p className="title">Bantuin Ase</p>
              <p>nungguin jakew kelamaan + ngantuk</p>
              <p>john@example.com</p>
              <a href="https://.com/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">Instagram</button>
              </a>
            </div>
          </div>
        </div>

        {/* Person 5 */}
        <div className="col-md-6">
          <div className="card aspect-ratio-4:3">
            <div className="card-body text-center">
              <h2>Jakew</h2>
              <p className="title">Designer</p>
              <p>ngedesain tapi telat</p>
              <p>john@example.com</p>
              <a href="https://.com/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">Instagram</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>  )
}
