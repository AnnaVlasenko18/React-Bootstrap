import { Card } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import css from './Breadcrumbs.module.css'

function Breadcrumbs() {
  return (
    <Card border="dark" className={css.container} >    
    <Card.Header className={css.title}>Breadcrumbs</Card.Header>
    <Card.Body>
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    </Card.Body>
    </Card>

  );
}

export default Breadcrumbs;