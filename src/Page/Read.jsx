import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';
import './load.css';

const Read = () => {
  const { endpoint } = useParams();
  const [comicDetail, setComicDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/read/${endpoint}`)
      .then(response => response.json())
      .then(data => {
        const manhwaData = data.chapter && data.chapter[0]; 
        setComicDetail(manhwaData || {});
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching comic details:', error);
      });
  }, [endpoint]);

  return (
    <div className="text-center">
      {loading ? (
        <div className="loading-container">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      ) : (
        <div className="container mt-4">
          <Row>
            <Col xs={12} md={8} lg={6} xl={7} className="mx-auto">
              {comicDetail.images &&
                comicDetail.images.map((image, index) => (
                  <div key={index} className="">
                    <img
                      src={image.url}
                      alt={`Page ${index + 1}`}
                      className="img-fluid"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '4px'
                      }}
                    />
                  </div>
                ))}
            </Col>
          </Row>
          <Row className="mt-3">
          <Col>
  <Button
    variant="outline-secondary"
    style={{backgroundColor:'#3E8A86',color:'white'}}
    disabled={!comicDetail.prevChapter} 
    href={`/read/${comicDetail.prevChapter}`} 
    className="me-2"
  >
    Prev Chapter
  </Button>
  <Button
    variant="outline-secondary"
    style={{backgroundColor:'#3E8A86',color:'white'}}
    disabled={!comicDetail.nextChapter} 
    href={`/read/${comicDetail.nextChapter}`} 
  >
    Next Chapter
  </Button>
</Col>

          </Row>
        </div>
      )}
    </div>
  );
};

export default Read;
