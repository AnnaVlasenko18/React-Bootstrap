import CloseButton from 'react-bootstrap/CloseButton';

function CloseButtons() {
  return( 
  <>
  <h2>Close Buttons</h2>
  <CloseButton />

  <h3>Disabled state</h3>
  <CloseButton disabled /> 

  <h3>Variants</h3>
  <div data-bs-theme="dark" className='bg-dark p-2'>
      <CloseButton />
      <CloseButton disabled />
    </div>

  <h3>Accessibility</h3>
  <CloseButton aria-label="Hide" />
  </>
);
}

export default CloseButtons;