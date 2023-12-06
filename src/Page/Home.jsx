import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export const Home = () => {
  const [latestComics, setLatestComics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/latest')
      .then(response => response.json())
      .then(data => {
        const comics = data.manhwas || [];
        setLatestComics(comics);
      })
      .catch(error => {
        console.error('Error fetching latest comics:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to My Comic World!</h1>
      <div>
        <h2>Popular Comics</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {latestComics.slice(1).map((comic, index) => (
            <Card
              key={index}
              style={{ width: '250px', marginBottom: '20px', marginLeft: '20px', marginRight: '20px'  }} 
            >
              <Card.Img variant="top" src={comic.thumbnail} alt={comic.title} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{comic.title}</Card.Title>
                <Card.Text>{comic.chapter}</Card.Text>
                <Button href={`/detail/${comic.endpoint}`} variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
  
};
