import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './load.css'

const Genre = () => {
  const { endpoint } = useParams();
  const [latestComics, setLatestComics] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/${endpoint}`)
      .then(response => response.json())
      .then(data => {
        const manhwaData = data.manhwa && data.manhwa[0]; 
        setLatestComics(manhwaData || {});
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching comic details:', error);
      });
  }, [endpoint]);

  return (
    <div>
        <h1>Tes</h1>
      {loading ? (
          <div className="loading-container">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>   ) : (
    <div className="container mt-4">
  
    
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
                <Card.Text>{comic.latest_chapter}</Card.Text>
                <Button className='tombol' href={`/detail/${comic.endpoint}`} variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
 

 
  </div>)}
  </div>
  );
};

export default Genre;