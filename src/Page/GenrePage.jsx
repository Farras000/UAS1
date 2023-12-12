import { useEffect, useState } from 'react';
import './load.css';

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
      {loading ? (
        <div className="loading-container">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: '80px', marginRight: '80px', marginTop: '40px' }}>
          {genres.map((genre, index) => (
            <a key={index} href={`genre/${genre.endpoint}`} style={{ color: 'black', width: '19%', marginBottom: '50px', textDecoration: 'none' }}>
              <p>{genre.name}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
