import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Detail = () => {
  const { endpoint } = useParams();
  const [comicDetail, setComicDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/detail/${endpoint}`)
      .then(response => response.json())
      .then(data => {
        setComicDetail(data.manhwa || {});
      })
      .catch(error => {
        console.error('Error fetching comic details:', error);
      });
  }, [endpoint]);

  return (
    <div>
        <h1>kontolodon</h1>
      <h1>{comicDetail.title}</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={comicDetail.thumbnail} alt={comicDetail.title} />
        <Card.Body>
          <Card.Title>{comicDetail.title}</Card.Title>
          <Card.Text>{comicDetail.synopsis}</Card.Text>
          <h2>Genres</h2>
          <ul>
            {comicDetail.genres &&
              comicDetail.genres.map(genre => (
                <li key={genre.name}>{genre.name}</li>
              ))}
          </ul>
          <h2>Chapters</h2>
          <ul>
            {comicDetail.chapters &&
              comicDetail.chapters.map((chapter, index) => (
                <li key={index}>
                  {chapter.name} - {chapter.date}
                  <Button href={`/chapter/${chapter.endpoint}`} variant="primary">
                    Read Chapter
                  </Button>
                </li>
              ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
