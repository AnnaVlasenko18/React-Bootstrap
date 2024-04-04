import { useState } from 'react';
import { Alert, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Example from './Placement'
import Examples from './Backdrop';
import css from  './Offcanvas.module.css'

function OffcanvasHidden() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const [showon, setShowon] = useState(false);

  const handleCloseon = () => setShowon(false);
  const handleShowon = () => setShowon(true);

  return (
    <Card border="dark" className={css.container}>
    <Card.Header className={css.title}>Offcanvas:</Card.Header>
    <Card.Body>
    <Card.Title>Basic Example</Card.Title>
    <>
    <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </>
      <br/>

      <br/>
    <Card.Title>Responsive</Card.Title>
    <>
    <Button variant="primary" className="d-lg-none" onClick={handleShows}>
        Launch
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={shows} onHide={handleCloses} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      </>
<br/>

<br/>
    <Card.Title>Placement</Card.Title>
    <Example/>
<br/>

<br/>
    <Card.Title>Backdrop</Card.Title>
    <Examples/>
    <br/>

<br/>
    <Card.Title>Static backdrop</Card.Title>
    <>
      <Button variant="primary" onClick={handleShowon}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={showon} onHide={handleCloseon} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </Card.Body>
    </Card>
  );
}

export default OffcanvasHidden;