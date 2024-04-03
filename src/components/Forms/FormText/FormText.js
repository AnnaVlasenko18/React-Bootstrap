import Form from 'react-bootstrap/Form';
import css from './FormText.module.css'
import Card from 'react-bootstrap/Card'

function FormText() {
    return (
      <Card border="dark" className={css.container}>
        <Card.Header className={css.title}>Form text</Card.Header>
        <Card.Body>

        <Card.Title className={css.subtitle}>Overview</Card.Title>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      </Card.Body>
      </Card>
    )
}

export default FormText