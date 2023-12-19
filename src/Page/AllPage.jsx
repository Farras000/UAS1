import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './load.css';


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
      <div className="loading-container">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    ) : (
      <div>
        <h2 style={{ margin: '10px' }}>All Comic</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {latestComics.slice(1).map((comic, index) => (
            <Link key={index} to={`/detail/${comic.endpoint}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card
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
                    style={{ position: 'absolute', aspectRatio: 3 / 4, objectFit: '' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{comic.title}</Card.Title>
                  <Card.Text>{comic.latest_chapter}</Card.Text>

           
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
  
  );
};
