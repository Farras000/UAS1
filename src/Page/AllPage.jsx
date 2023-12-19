import { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './load.css';



export const AllPage = () => {
  const [latestComics, setLatestComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/all/:page`)
      .then(response => response.json())
      .then(data => {
        const comics = data.manhwas || [];
        setLatestComics(comics);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching latest comics:', error);
        setLoading(false); 
      });
  }, []);





  return (
    <div>
    {loading ? (
      <div className="loading-container">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    ) : (
      <Container>
      <h2 style={{ margin: '30px', textAlign: 'center', color: '#F1F1E6' }}>All Comic</h2>
      <Row className="justify-content-center">
        {latestComics.slice(1).map((comic, index) => (
          <Col key={index} xs={5} sm={6} md={4} lg={3} xl={2.5} style={{ marginBottom: '20px' }}>
            <Link to={`/detail/${comic.endpoint}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card style={{ height: '100%' }}>
                <div style={{ paddingBottom: '145%', position: 'relative', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={comic.thumbnail}
                    alt={comic.title}
                    style={{ position: 'absolute', aspectRatio: 3 / 4, objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {comic.title}
                  </Card.Title>
                  <Card.Text>{comic.latest_chapter}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
    )}
  </div>
  
  );
};
