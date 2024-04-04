import Pagination from 'react-bootstrap/Pagination';
import css from './Pagination.module.css'
import { Card } from 'react-bootstrap';

function Paginations() {
  return (
    <Card border="dark" className={css.container}>
    <Card.Header className={css.title}>Pagination:</Card.Header>
    <Card.Body>
    <Card.Title>More options</Card.Title>
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </Card.Body>
    </Card>

  );
}

export default Paginations;