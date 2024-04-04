import ProgressBar from 'react-bootstrap/ProgressBar';
import css from './ProgressBars.module.css'
import { Card } from 'react-bootstrap';

function ProgressBars() {
    const now = 60;
  return (
  <Card border="dark" className={css.container}>
  <Card.Header className={css.title}>Progress bars</Card.Header>
  <Card.Body>
  <Card.Title>Example</Card.Title>
  <>
  <ProgressBar now={60} />
  </>
  <br/>

<br/>
  <Card.Title>With label</Card.Title>
  <>
  <ProgressBar now={now} label={`${now}%`} />;
  </>
  <br/>

<br/>
  <Card.Title>Screenreader only label</Card.Title>
  <>
  <ProgressBar now={now} label={`${now}%`} visuallyHidden /></>
  <br/>

<br/>
  <Card.Title>Contextual alternatives</Card.Title>
  <>
  <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
    </>
    <br/>

<br/>
  <Card.Title>Striped</Card.Title>
  <div>
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar striped variant="info" now={20} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={80} />
    </div>
    <br/>

<br/>
  <Card.Title>Animated</Card.Title>
  <ProgressBar animated now={45} />
  <br/>

<br/>
  <Card.Title>Stacked</Card.Title>
  <>
  <ProgressBar>
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>
    </>
    </Card.Body>
    </Card>

  );
}

export default ProgressBars;