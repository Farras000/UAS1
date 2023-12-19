import { useEffect, useState } from 'react';
import { Card , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './load.css'


export const Home = () => {
  const [latestComics, setLatestComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/popular`)
      .then(response => response.json())
      .then(data => {
        const comics = data.manhwas || [];
        setLatestComics(comics);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching latest comics:', error);
        setLoading(true); 
      });
  }, []);

  return (
    <div>
    {loading ? (
      <div className="loading-container">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>    ) : (
     <div>
     <h2 style={{ margin: '10px', textAlign: 'center', color:'#F1F1E6' }}>Our Popular Comic</h2>
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
       {latestComics.slice(1).map((comic, index) => (
         <Link key={index} to={`/detail/${comic.endpoint}`} style={{ textDecoration: 'none', color: 'inherit' }}>
           <Card
             style={{ width: '270px', marginBottom: '20px', height: '450px', marginLeft: '20px', marginRight: '20px', position: 'relative' }}
           >
             <div
               style={{
                 paddingBottom: '135%',
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
               <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} >{comic.title}</Card.Title>
               <Card.Text>{comic.latest_chapter}</Card.Text>

        
             </Card.Body>
           </Card>
         </Link>
       ))}
     </div>
     <div style={{ textAlign: 'center', margin: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="primary">View All</Button>
            </Link>
          </div>
   </div>
    )}

  </div>
  
  );
};
