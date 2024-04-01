import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Buttons() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ]

  const [value, setValue] = useState([1, 3]);
  
  const handleChange = (val) => setValue(val);
  
  return (
    <>
        <h2>Buttons</h2>
        <>
         <Button variant="primary">Primary</Button>{' '}
         <Button variant="secondary">Secondary</Button>{' '}
         <Button variant="success">Success</Button>{' '}
         <Button variant="warning">Warning</Button>{' '}
         <Button variant="danger">Danger</Button>{' '}
         <Button variant="info">Info</Button>{' '}
         <Button variant="light">Light</Button>{' '}
         <Button variant="dark">Dark</Button>
         <Button variant="link">Link</Button>

         <h3>Outline buttons</h3>
         <>
          <Button variant="outline-primary">Primary</Button>{' '}
          <Button variant="outline-secondary">Secondary</Button>{' '}
          <Button variant="outline-success">Success</Button>{' '}
          <Button variant="outline-warning">Warning</Button>{' '}
          <Button variant="outline-danger">Danger</Button>{' '}
          <Button variant="outline-info">Info</Button>{' '}
          <Button variant="outline-light">Light</Button>{' '}
          <Button variant="outline-dark">Dark</Button>
         </>      
         
         <h3>Button tags</h3>
         <>
           <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
           <Button as="input" type="button" value="Input" />{' '}
           <Button as="input" type="submit" value="Submit" />{' '}
           <Button as="input" type="reset" value="Reset" />
         </>
         <h3>Sizes</h3>
         <>
           <div className="mb-2">
             <Button variant="primary" size="lg">
               Large button
             </Button>{' '}
             <Button variant="secondary" size="lg">
               Large button
             </Button>
           </div>
           <div>
              <Button variant="primary" size="sm">
                Small button
              </Button>{' '}
              <Button variant="secondary" size="sm">
                Small button
              </Button>
            </div>
          </>
         <h3>Block buttons</h3>
         <div className="d-grid gap-2">
           <Button variant="primary" size="lg">
             Block level button
           </Button>
           <Button variant="secondary" size="lg">
             Block level button
           </Button>
         </div>
         <h3>Active state</h3>
         <>
           <Button variant="primary" size="lg" active>
             Primary button
           </Button>{' '}
           <Button variant="secondary" size="lg" active>
             Button
           </Button>
         </>           
         <h3>Disabled state</h3>
         <>
           <Button variant="primary" size="lg" disabled>
             Primary button
           </Button>{' '}
           <Button variant="secondary" size="lg" disabled>
             Button
           </Button>{' '}
           <Button href="#" variant="secondary" size="lg" disabled>
             Link
           </Button>
         </>     
         <h3>Button loading state</h3>
              <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
            {isLoading ? 'Loading…' : 'Click to load'}
              </Button>
         <h3>Checkbox / Radio</h3>
         <>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br />
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
      <br />
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
         <h3>Uncontrolled</h3>
         <>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton id="tbg-check-1" value={1}>
          Checkbox 1 (pre-checked)
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2}>
          Checkbox 2
        </ToggleButton>
        <ToggleButton id="tbg-check-3" value={3}>
          Checkbox 3 (pre-checked)
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Radio 1 (pre-checked)
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Radio 2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    </>
         <h3>Controlled</h3>
         <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1}>
        Option 1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        Option 2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3}>
        Option 3
      </ToggleButton>
    </ToggleButtonGroup>
         
        </>
    </>

  );
}

export default Buttons;