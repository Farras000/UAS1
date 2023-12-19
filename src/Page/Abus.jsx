import { Container, Row, Col, Card } from 'react-bootstrap';
import './us.css';
import elisa from './IMG/elisa.jpeg';
import Ase from './IMG/ase.jpeg';
import Marsal from './IMG/Marsal.jpeg';
import farras from './IMG/farras.jpeg';
import jack from './IMG/jakew.jpeg';

const isi = [
  {
    isiaja:
      'Proyek Web Komik ini bermula pada bulan Oktober 2023 sebagai inisiatif kami untuk menyelesaikan tugas akhir mata kuliah "Intro To Technology" di Universitas Multimedia Nusantara. Tim kami, yang terdiri dari Ravyanda Farras Ibrahim, Muhammad Marshal Omar Farras, Muhammad Prasetyo, Elisa Putra Sitompul, dan Aditya Nugraha, berkumpul dengan semangat untuk menghadirkan sebuah karya yang tidak hanya memenuhi persyaratan akademis, tetapi juga mencerminkan minat kami dalam seni, desain, dan pengembangan web.',
    isilagi:
      ' Dalam perjalanan pengembangan proyek ini, kami menghadapi berbagai tantangan dan rintangan yang membutuhkan kerja keras dan kolaborasi tim yang erat. Dengan latar belakang keahlian yang beragam, kami bersatu untuk menciptakan sebuah platform web komik yang lebih dari sekadar tugas akhir, tetapi juga sebuah wujud dedikasi kami terhadap seni digital dan teknologi.',
    lagiisi:
      'Setiap langkah dari konsepsi proyek hingga implementasi melibatkan peran aktif dari setiap anggota kelompok. Kami memilih teknologi dan alat dengan hati-hati, merancang setiap elemen dengan cermat, dan mengatasi setiap hambatan dengan tekad untuk menciptakan sesuatu yang istimewa.',
    lanjutisi:
      'Melalui penggunaan bahasa pemrograman terkini, desain yang memikat, dan fitur-fitur interaktif, proyek ini berkembang menjadi lebih dari sekadar tugas akhir. Ini adalah perwujudan kerja keras, inovasi, dan semangat kami untuk menghadirkan pengalaman membaca komik yang dinamis dan menarik.',
    penutup:
      'Kami ingin berterima kasih kepada semua pihak yang telah memberikan dukungan, termasuk dosen dan asisten dosen yang memberikan bimbingan berharga, serta teman-teman (Fatan) yang dengan sukarela membantu kami melewati setiap tantangan. Terima kasih atas kunjungan Anda, dan kami berharap Anda menikmati hasil kerja keras kami sebanyak yang kami nikmati selama proses pembuatannya.',
  },
];

const profiles = [
  {
    name: 'Ravyanda Farras I',
    position: 'Front-end, UI/UX Designer, Project Manager, Content Writer, PPT',
    bio: '',
    nim: '80775',
    bioimg: farras,
  },
  {
    name: 'M Marshal Omar F',
    position: 'Server Administrator, Membantu Farras, Hosting',
    bio: '',
    nim: '68056',
    bioimg: Marsal,
  },
  {
    name: 'Muhammad Prasetyo',
    position: 'PPT, Technical Support Engineer',
    bio: '',
    nim: '81668',
    bioimg: Ase,
  },
  {
    name: 'Elisa Putra S',
    position: 'PPT, Technical Support Engineer',
    bio: '',
    nim: '77185',
    bioimg: elisa,
  },
  {
    name: 'Aditya Nugraha',
    position: 'UI/UX Designer',
    bio: '',
    nim: '80926',
    bioimg: jack,
  },
];

export const Abus = () => {
  return (
    <Container className="container-fluid p-0" style={{ maxWidth: '1200px' }}>
      <h2 style={{ padding: '30px', textAlign: 'center' }}>About Us </h2>
      {isi.map((isitext, index) => (
        <div
          className="about-us-container"
          key={index}
          style={{ backgroundColor: 'grey', color: 'white', width: 'auto', height: 'auto', borderRadius: '5px' }}
        >
          <div style={{ padding: '50px' }}>
            <p>{isitext.isiaja} </p>
            <p>{isitext.isilagi} </p>
            <p>{isitext.lagiisi} </p>
            <p>{isitext.lanjutisi} </p>
            <p>{isitext.penutup} </p>
          </div>
        </div>
      ))}
      <br />
      <br />
      <br />
      <br />
      <h2 className="text-center mb-4">Meet Our Team</h2> 
        <Row className="justify-content-center">
    {profiles.map((profile, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4">
        <Card style={{ height: '100%', width: '100%', padding: '0.5rem', fontSize: '1.2rem' }}>
            <Card.Img variant="top" src={profile.bioimg} alt={profile.name} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            <Card.Body className="text-center">
            <div className="card-title mb-2">
                <Card.Title>{profile.name}</Card.Title>
            </div>
            <div className="card-nim mb-2">
                <Card.Text>{profile.nim}</Card.Text>
            </div>
            <div className="card-position mb-2">
                <Card.Subtitle className="text-muted">{profile.position}</Card.Subtitle>
            </div>
            <Card.Text>{profile.bio}</Card.Text>
            </Card.Body>
        </Card>
        </Col>
    ))}
    </Row>

    </Container>
  );
};
