import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import css from "./Images.module.css"
import { Card } from 'react-bootstrap';

function Images() {
  return (
    <Card border="dark" className={css.container}>
    <Card.Header className={css.title}>Images:</Card.Header>
    <Card.Body>
    <Card.Title>Shape</Card.Title>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://via.placeholder.com/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://via.placeholder.com/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://via.placeholder.com/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
<br/>

<br/>
    <Card.Title>Fluid</Card.Title>
     <Image src="https://via.placeholder.com/484x250" fluid />
     </Card.Body>
    </Card>

   
  );
}

export default Images;