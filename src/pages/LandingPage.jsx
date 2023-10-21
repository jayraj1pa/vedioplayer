import { Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateUrl = useNavigate();

  return (
    <>
      <Row className="mt-5 mb-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus, consequatur doloribus reprehenderit,
            atque repudiandae corrupti eaque natus nisi sint adipisci, illo nostrum incidunt minus? Sint asperiores eligendi qui minus.
          </p>
          <button onClick={() => navigateUrl("/home")} className='btn btn-info'>Get started</button>
        </Col>
        <Col lg={5}>
          <Col></Col>
          <img className='img-fluid' src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif' alt="landing" />
        </Col>
      </Row>

      <div className='mt-5 mb-5 d-flex flex-column justify-content-between align-items-center'>
        <h3>Features</h3>
        <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: '22rem' }} className='p-3'>
            <Card.Img width={"300px"} height={"300px"} variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '22rem' }} className='p-3'>
            <Card.Img width={"300px"} height={"300px"} variant="top" src="https://cdn.dribbble.com/users/29051/screenshots/2248862/packs-loading-animation-3.gif" />
            <Card.Body>
              <Card.Title>Categorize Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '22rem' }} className='p-3'>
            <Card.Img width={"300px"} height={"300px"} variant="top" src="https://i.makeagif.com/media/5-28-2021/T9re_S.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container rounded border border-secondary p-5 mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h3 className='mb-5 text-warning'>Simple, Fast, and Powerful</h3>
          <h6 className="mb-3">
            <span className='fs-5 fw-bolder'>Play Everything</span>: The majestic cathedral, with its intricate stained glass windows, stood as a testament to the craftsmanship of a bygone era.
          </h6>
          <h6 className="mb-3">
            <span className='fs-5 fw-bolder'>Categorize Videos</span>: The majestic cathedral, with its intricate stained glass windows, stood as a testament to the craftsmanship of a bygone era.
          </h6>
          <h6 className='mb-3'>
            <span className='fs-5 fw-bolder'>Managing History</span>: The majestic cathedral, with its intricate stained glass windows, stood as a testament to the craftsmanship of a bygone era.
          </h6>
        </div>

        <div className="vedio col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ATElufr0OiE?si=VdtCATvmGvXjaQ1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
