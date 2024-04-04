import { useState } from 'react';
import { Card, Fade } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import css from './Transitions.module.css'

function Transitions() {
  const [open, setOpen] = useState(false);
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);

  return (
    <Card border="dark" className={css.container}>
    <Card.Header className={css.title}>Transitions:</Card.Header>
    <Card.Body>
    <Card.Title>Basic Example</Card.Title>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    <br/>
    <br/>
    <Card.Title>Horizontal</Card.Title>
      <Button
        onClick={() => setOpenA(!openA)}
        aria-controls="example-collapse-text"
        aria-expanded={setOpenA}
      >
        click
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={openA} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>

    <Card.Title>Fade</Card.Title>
      <Button
        onClick={() => setOpenB(!openB)}
        aria-controls="example-fade-text"
        aria-expanded={openB}
      >
        Toggle text
      </Button>
      <Fade in={openB}>
        <div id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
    </Card.Body>
    </Card>
    
  );
}

export default Transitions;