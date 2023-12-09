import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './card.css';
import loadingGif from '../loading-snake-io.gif';

export const AllPage = () => {
  const [latestComics, setLatestComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/all/:page')
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
        <img src={loadingGif} alt="Loading..." style={{ width: '50px', height: '50px' }} />
      ) : (
        <div>
          <h2 style={{ margin: '10px' }}>All Comic</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {latestComics.slice(1).map((comic, index) => (
              <Card
                key={index}
                style={{ width: '270px', marginBottom: '20px', marginLeft: '20px', marginRight: '20px', position: 'relative' }}
              >
                <div
                  style={{
                    paddingBottom: '150%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={comic.thumbnail}
                    alt={comic.title}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{comic.title}</Card.Title>
                  <Card.Text>{comic.chapter}</Card.Text>
                  <Button className='tombol' href={`/detail/${comic.endpoint}`} variant="primary">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
