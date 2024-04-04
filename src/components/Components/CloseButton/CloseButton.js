import CloseButton from 'react-bootstrap/CloseButton';
import css from './CloseButton.module.css'
import { Card } from 'react-bootstrap';

function CloseButtons() {
  return( 
  <Card border="dark" className={css.container} >
  <Card.Header className={css.title}>Close Buttons</Card.Header>
  <Card.Body>
  <CloseButton />
<br/>

<br/>
  <Card.Title>Disabled state</Card.Title>
  <CloseButton disabled /> 
  <br/>

<br/>
  <Card.Title>Variants</Card.Title>
  <div data-bs-theme="dark" className='bg-dark p-2'>
      <CloseButton />
      <CloseButton disabled />
    </div>
    <br/>

<br/>
  <Card.Title>Accessibility</Card.Title>
  <CloseButton aria-label="Hide" />
  </Card.Body>
  </Card>
);
}

export default CloseButtons;