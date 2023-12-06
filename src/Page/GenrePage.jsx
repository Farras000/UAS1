import { useEffect, useState } from 'react';

const GenrePage = () => {
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        const response = await fetch('http://localhost:8000/genre');
        const data = await response.json();
        setGenreData(data);
      } catch (error) {
       <h1>kontolodon</h1>;
      }
    };

    fetchGenreData();
  }, []);

  return (
    <div>
        <p>ceritanya ini genre page</p>
            {genreData.map((genre) => (
                <div key={genre.id}>{genre.name}</div>
            ))}
        </div>
  );
};

export default GenrePage;
