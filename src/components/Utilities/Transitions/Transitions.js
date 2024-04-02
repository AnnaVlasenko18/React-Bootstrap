import { useState } from 'react';
import { Card, Fade } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Transitions() {
  const [open, setOpen] = useState(false);
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);

  return (
    <>
    <h2>Transitions:</h2>
    <h3>Basic Example</h3>
    <>
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
    </>
    
    <h2>Horizontal</h2>
    <>
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
    </>

    <h2>Fade</h2>
    <>
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
    </>
    </>
    
  );
}

export default Transitions;