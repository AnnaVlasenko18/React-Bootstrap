import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBars() {
    const now = 60;
  return (
  <>
  <h2>Progress bars</h2>
  <h3>Example</h3>
  <>
  <ProgressBar now={60} />
  </>
  <h3>With label</h3>
  <>
  <ProgressBar now={now} label={`${now}%`} />;
  </>

  <h3>Screenreader only label</h3>
  <>
  <ProgressBar now={now} label={`${now}%`} visuallyHidden /></>

  <h3>Contextual alternatives</h3>
  <>
  <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
    </>

  <h3>Striped</h3>
  <div>
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar striped variant="info" now={20} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={80} />
    </div>

  <h3>Animated</h3>
  <ProgressBar animated now={45} />

  <h3>Stacked</h3>
  <>
  <ProgressBar>
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>
    </>
  </>

  );
}

export default ProgressBars;