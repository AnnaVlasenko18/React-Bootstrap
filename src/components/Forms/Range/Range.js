import  {Card, Form} from "react-bootstrap";
import css from './Range.module.css'


function Range() {
    return (

  <Card border="dark" className={css.container} >
      <Card.Header className={css.title}>Range</Card.Header>
      <Card.Body>
        <Card.Title>Overview</Card.Title>
          <Form.Label>Range</Form.Label>
          <Form.Range />
      </Card.Body>
    </Card>
    )
}

export default Range

