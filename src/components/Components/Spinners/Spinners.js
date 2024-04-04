import { Button, Card } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import css from './Spinners.module.css'

function Spinners() {
  return (
    <Card border="dark" className={css.container}>
    <Card.Header className={css.title}>Spinners</Card.Header>
    <Card.Body>
    <Card.Title>Example</Card.Title>
    <>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </>
    <br/>

<br/>
    <Card.Title>Animations</Card.Title>
    <Spinner animation="border" />
    <br/>

<br/>
    <Card.Title>Grow Spinner</Card.Title>
    <Spinner animation="grow" />
    <br/>

<br/>
    <Card.Title>Variants</Card.Title>
    <>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
    </>
    <br/>

<br/>
    <Card.Title>Sizing</Card.Title>
    <>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </>
    <br/>

<br/>
    <Card.Title>Buttons</Card.Title>
    <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
    <br/>

<br/>
    <Card.Title>Accessibility</Card.Title>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </Card.Body>
    </Card>

  );
}

export default Spinners;