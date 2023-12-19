import { useEffect, useState } from 'react';
import './load.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const GenrePage = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/genre`)
      .then(response => response.json())
      .then(data => {
        setGenres(data.genres || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching genres:', error);
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
        <div>
          <h2 style={{ margin: '10px', textAlign: 'center', color:'#F1F1E6' }}>Genre List</h2>
          <Row className="justify-content-center">
            {genres.map((genre, index) => (
              <Col key={index} xs={5} md={4} lg={4} xl={4} style={{ marginBottom: '20px' }}>
                <Link to={`${genre.endpoint}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{genre.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};
