import Form from 'react-bootstrap/Form';
import css from './Select.module.css'
import Card from 'react-bootstrap/Card'

function Select() {
    return (
        <Card border="dark" className={css.container}>
        <Card.Header className={css.title}>Select</Card.Header>

        <Card.Body>
        <Card.Title className={css.subtitle}>Default</Card.Title>
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

    <br />
    <Card.Title className={css.subtitle}>Sizing</Card.Title>
    <Form.Select size="lg">
        <option>Large select</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      <br />
      <Form.Select size="sm">
        <option>Small select</option>
      </Form.Select>
      </Card.Body>
        </Card>
    )
}

export default Select