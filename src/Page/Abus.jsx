import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect } from 'react';
import './us.css'
import elisa from './IMG/Elisa.jpeg';
import Ase from './IMG/Ase.jpeg';
import Marsal from './IMG/Marsal.jpeg';
import farras from './IMG/Farras.jpeg';
import jack from './IMG/Jakew.jpeg';
import instagramLogo from './IMG/IG.png';
  

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
    instagram: 'farrasibrhm', 
    bioimg: farras,
  },
  {
    name: 'M Marshal Omar F',
    position: 'Server Administrator, Membantu Farras, Hosting, Membeli Kopi',
    bio: '',
    nim: '68056',
    instagram: 'marshalof_', 
    bioimg: Marsal,
  },
  {
    name: 'Muhammad Prasetyo',
    position: 'PPT, Technical Support Engineer',
    bio: '',
    nim: '81668',
    instagram: '_pras24', 
    bioimg: Ase,
  },
  {
    name: 'Elisa Putra Sitompul',
    position: 'PPT, Technical Support Engineer',
    bio: '',
    nim: '77185',
    instagram: 'putraaaaa.0', 
    bioimg: elisa,
  },
  {
    name: 'Aditya Nugraha',
    position: 'UI/UX Designer',
    bio: '',
    nim: '80926',
    instagram: 'aditnugraa', 
    bioimg: jack,
  },
];

export const Abus = () => {

    useEffect(() => {
        const handleScroll = () => {
          const elements = document.querySelectorAll('.animate-on-scroll');
          elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const isInView = rect.top <= windowHeight * 0.9 && rect.bottom >= 1; 
    
            if (isInView) {
              element.classList.add('visible');
            } else {
              element.classList.remove('visible');
            }
          });
        };
    

        window.addEventListener('scroll', handleScroll);
    
  
        handleScroll();
 
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (

    
    <Container className="container-fluid p-0" style={{ maxWidth: '1200px' }}>
   
      <h2 style={{ padding: '30px', textAlign: 'center', color:'#F1F1E6' }}>About Us </h2>
      {isi.map((isitext, index) => (
        <div
          className="about-us-container"
          key={index}
         
          style={{ backgroundColor: '#374366', color: '#F1F1E6', width: 'auto', height: 'auto', borderRadius: '5px' }}
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
      <h2 style={{color:'#F1F1E6'}} className="text-center mb-4"  >Meet Our Team</h2> 
      <Row className="justify-content-center">
  {profiles.map((profile, index) => (
    <Col key={index} xs={5} sm={5} md={4} lg={2} className="mb-4 animate-on-scroll">
      <Card className="animated-card" style={{ height: '100%', width: '9  0%', padding: '0.5rem', fontSize: '1.2rem', position: 'relative', marginBottom: '20px',backgroundColor: '#374366', color:'#F1F1E6'  }}>
        <Card.Img variant="top" src={profile.bioimg} alt={profile.name} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
        <Card.Body  className="text-center" >
          <div className="card-title mb-3">
            <Card.Title  >{profile.name}</Card.Title>
          </div>
          <div className="card-nim mb-3">
            <Card.Text >{profile.nim}</Card.Text>
          </div>
          <div className="card-position mb-2">
            <Card.Subtitle style={{fontSize:'15px'}}>{profile.position}</Card.Subtitle>
          </div>
          <Card.Text>{profile.bio}</Card.Text>

        
          {profile.instagram && (
            <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', marginBottom: '10px' }}>
              <a href={`https://www.instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram" style={{ width: '30px', height: '30px' }} />
              </a>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


    <br /><br /><br />

    </Container>
  );
};
