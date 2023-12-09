import { useEffect, useState } from 'react';
import loadingGif from '../loading-snake-io.gif'
import './card.css'

export const GenrePage = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/genre')
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
      <h1>Welcome to My Comic World!</h1>
      {loading ? (
        <img src={loadingGif} className='loading-gif' alt="Loading..." /> 
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: '80px', marginRight: '80px', marginTop: '40px' }}>
          {genres.map((genre, index) => (
            <a key={index} href={`${genre.endpoint}`} style={{ color: 'white',  width: '19%', marginBottom: '50px', textDecoration: 'none' }}>
              <p>{genre.name}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
