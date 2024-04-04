import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import css from './Badges.module.css'
import { Card} from 'react-bootstrap';

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
    <Stack direction="horizontal" gap={2}>
      <div style={{ marginBottom: '8px', marginRight: '8px' }}>
      <Badge bg="primary" style={{ marginRight: '8px' }}>Primary</Badge>
      <Badge bg="secondary" style={{ marginRight: '8px' }}>Secondary</Badge>
      <Badge bg="success"style={{ marginRight: '8px' }}>Success</Badge>
      <Badge bg="danger"style={{ marginRight: '8px' }}>Danger</Badge>
      <Badge bg="warning" text="dark" style={{ marginRight: '8px' }}>
        Warning
      </Badge>
      <Badge bg="info" style={{ marginRight: '8px' }}>Info</Badge>
      <Badge bg="light" text="dark" style={{ marginRight: '8px' }}>
        Light
      </Badge>
      <Badge bg="dark" style={{ marginRight: '8px' }}>Dark</Badge>
      </div>
    </Stack>

    </Card.Body>
    </Card>
  );
}

export default Badges;