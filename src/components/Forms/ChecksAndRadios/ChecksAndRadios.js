import Form from 'react-bootstrap/Form';
import css from './ChecksAndRadios.module.css'
import Card from 'react-bootstrap/Card'
import { CardBody } from 'react-bootstrap';

function ChecksAndRadios() {
    return(
        <Card border="dark" className={css.container}>
        <Card.Header className={css.title}>Checks and radios</Card.Header>
        <CardBody>
        <Form>
            <Card.Title className={css.subtitle}>Default (stacked)</Card.Title>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}

   <br />
      <Card.Title className={css.subtitle}>Switches</Card.Title>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
      <Form.Check // prettier-ignore
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      />
 
 <br />
      <Card.Title className={css.subtitle}>Inline</Card.Title>
      {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            disabled
            label="3 (disabled)"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
 
 <br />
      <Card.Title className={css.subtitle}>Reverse</Card.Title>
      {['checkbox', 'radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
            reverse
            label="1"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="2"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
          <Form.Check
            reverse
            disabled
            label="3 (disabled)"
            type={type}
            id={`reverse-${type}-3`}
          />
        </div>
      ))}

     <br />
      <Card.Title className={css.subtitle}>Without labels</Card.Title>
      <Form.Check aria-label="option 1" />
      <Form.Check type="radio" aria-label="radio 1" />

      <br />
      <Card.Title className={css.subtitle}>Customizing FormCheck rendering</Card.Title>
      {['checkbox', 'radio'].map((type) => (
        <div key={type} className="mb-3">
          <Form.Check type={type} id={`check-api-${type}`}>
            <Form.Check.Input type={type} isValid />
            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
          </Form.Check>
        </div>
      ))}

    </Form>
    </CardBody>
        </Card >
    )
}

export default ChecksAndRadios