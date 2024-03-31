import Form from 'react-bootstrap/Form';

function Select() {
    return (
        <>
        <h2>Select</h2>
        <h3>Default</h3>
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

    <h3>Sizing</h3>
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
        </>
    )
}

export default Select