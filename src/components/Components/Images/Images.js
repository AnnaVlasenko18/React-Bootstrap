import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Images() {
  return (
    <>
    <h2>Images:</h2>
    <h3>Shape</h3>
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

    <h3>Fluid</h3>
     <Image src="https://via.placeholder.com/484x250" fluid />
    </>
   
  );
}

export default Images;