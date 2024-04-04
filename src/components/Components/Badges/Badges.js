import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import css from './Badges.module.css'
import { Card, Col, Container, Row } from 'react-bootstrap';

function Badges() {
  return (
    <Card border="dark" className={css.container}>
      <Card.Header className={css.title}>Badges</Card.Header>
      <Card.Body>
      <Card.Title>Examples</Card.Title>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>

<br/>
      <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
<br/>

    <br/>
    <Card.Title>Contextual variations</Card.Title>
<Container>
  <Row>
    <Col xs={3}>
      <Badge bg="primary">Primary</Badge>
    </Col>
    <Col xs={3}>
      <Badge bg="secondary">Secondary</Badge>
    </Col>
    <Col xs={3}>
      <Badge bg="success">Success</Badge>
    </Col>
    <Col xs={3}>
      <Badge bg="danger">Danger</Badge>
    </Col>
  </Row>
  <Row>
    <Col xs={3}>
      <Badge bg="warning" text="dark">Warning</Badge>
    </Col>
    <Col xs={3}>
      <Badge bg="info">Info</Badge>
    </Col>
    <Col xs={3}>
      <Badge bg="light" text="dark">Light</Badge>
    </Col>
    <Col xs={3}>
      <Badge bg="dark">Dark</Badge>
    </Col>
  </Row>
</Container>

    </Card.Body>
    </Card>
  );
}

export default Badges;