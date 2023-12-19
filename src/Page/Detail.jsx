import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './load.css'

const Detail = () => {
  const { endpoint } = useParams();
  const [comicDetail, setComicDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/detail/${endpoint}`)
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
        </div>) : (
        <div className="container mt-4">

          <Row>
            <Col >
              <Card style={{ backgroundColor: '#374366', color: '#F1F1E6' }} >
                <Row>
                  <Col md={4}>
                    <Card.Img
                      variant="top"
                      src={comicDetail.thumbnail}
                      alt={comicDetail.title}
                      className="img-fluid"
                      style={{
                        maxWidth: '85%',
                        height: 'auto',
                        aspectRatio: '3/4',
                        margin: '25px',
                        borderRadius: '4px'
                      }}
                    />

                  </Col>
                  <Col md={8}>
                    <Card.Body className='crd' >
                      <Card.Title>{comicDetail.title}</Card.Title>
                      <Card.Text>{comicDetail.synopsis}</Card.Text>
                      <h2>Genres</h2>
                      <ul>
                        {comicDetail.genres &&
                          comicDetail.genres.map(genre => (
                            <li key={genre.name}>{genre.name}</li>
                          ))}
                      </ul>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>

          </Row>
          <Row style={{ alignContent: 'center' }} className="mt-4">
            <Col md={12} >
              <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#F1F1E6' }}>Chapters</h2>
              <Row>
                {comicDetail.chapters &&
                  comicDetail.chapters.map((chapter, index) => (
                    <Col
                      key={index}
                      xs={6} sm={6} md={4} lg={3} xl={2.5}
                    >
                      <Card style={{ marginBottom: '25px', backgroundColor: '#374366', color: '#F1F1E6' }}>
                        <Card.Body style={{ border: ' ', borderRadius: '2px' }}>
                          <Card.Title>{chapter.title}</Card.Title>
                          <Card.Title>{chapter.name}</Card.Title>
                          <Card.Subtitle className="mb-2 ">{chapter.date}</Card.Subtitle>
                          <Button
                            href={`/read/${chapter.endpoint}`}
                            style={{ margin: '10px 0', backgroundColor: '#3E8A86' }}
                          >
                            Read Chapter
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>

            </Col>
          </Row>


        </div>)}
    </div>
  );
};

export default Detail;