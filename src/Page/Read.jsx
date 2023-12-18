import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './load.css'

const Detail = () => {
  const { endpoint } = useParams();
  const [, setComicDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/read   /${endpoint}`)
      .then(response => response.json())
      .then(data => {
        const manhwaData = data.manhwa && data.manhwa[0]; 
        setComicDetail(manhwaData || {});
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching comic details:', error);
      });
  }, [endpoint]);

  return (
    <div>
      {loading ? (
          <div className="loading-container">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>   ) :(
          <div className="loading-container">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>   )}
  </div>
  );
};

export default Detail;