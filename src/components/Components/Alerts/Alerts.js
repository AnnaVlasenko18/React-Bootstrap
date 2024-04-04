import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import css from './Alerts.module.css'
import { Card } from 'react-bootstrap';

function Alerts() {
    const [show, setShow] = useState(true);
  return (
    <Card border="dark" className={css.container}>
    <Card.Header className={css.title}>Alerts</Card.Header>
    <Card.Body>
    <Card.Title>Examples</Card.Title>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}

<br/>
      <Card.Title>Links</Card.Title>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="home">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}

<br/>
      <Card.Title>Additional content</Card.Title>
      <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>

<br/>
    <Card.Title>Dismissing</Card.Title>
    <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </Card.Body>
    </Card>
  );
}

export default Alerts;