import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Example from './Placement'
import Examples from './Backdrop';

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
    <>
    <h2>Offcanvas:</h2>
    <h3>Basic Example</h3>
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
    <h3>Responsive</h3>
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

    <h3>Placement</h3>
    <Example/>

    <h3>Backdrop</h3>
    <Examples/>
    <h3>Static backdrop</h3>
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
    </>
  );
}

export default OffcanvasHidden;