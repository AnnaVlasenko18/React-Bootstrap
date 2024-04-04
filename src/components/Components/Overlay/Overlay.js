import { useState, useRef } from 'react';
import { Card, Image, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popovers from './Popovers';
import Dynamically from './Dynamically';
import css from './Overlay.module.css'

function Overlays() {
  const [showon, setShowon] = useState(false);
  const targeton = useRef(null);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="home">{children}</a>
    </OverlayTrigger>
  );

  const [shows, setShows] = useState(false);
  const targets = useRef(null);

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <Card border="dark" className={css.container} >
    <Card.Header className={css.title}>Overlays:</Card.Header>
    <Card.Body>
    <Card.Title>Creating an Overlay</Card.Title>
    <>
    <Button variant="danger" ref={targeton} onClick={() => setShowon(!showon)}>
        Click me to see
      </Button>
      <Overlay target={targeton.current} show={showon} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
       </Overlay>
    </>
    <br/>

    <br/>
    <Card.Title>OverlayTrigger</Card.Title>
    <>
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
    </>
    <br/>

    <br/>
    <Card.Title>Customizing trigger behavior</Card.Title>
    <>
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image
            ref={ref}
            roundedCircle
            src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
          />
          <span className="ms-1">Hover to see</span>
        </Button>
      )}
    </OverlayTrigger>
    </>
    <br/>

    <br/>
    <Card.Title>Tooltips</Card.Title>
    <> 
    <p>Tight pants next level keffiyeh{' '}
      <Link title="Default title" id="t-1">
        you probably
      </Link>{' '}
      haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable
      quinoa 8-bit american apparel{' '}
      <Link id="t-2" title="Another one">
        have a
      </Link>{' '}
      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
      thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
      cleanse vegan chambray. A really ironic artisan{' '}
      <Link title="Another one here too" id="t-3">
        whatever keytar
      </Link>
      , scenester farm-to-table banksy Austin{' '}
      <Link title="The last tip!" id="t-4">
        twitter handle
      </Link>{' '}
      freegan cred raw denim single-origin coffee viral.
    </p>
<br/>
  <>
      <Button ref={targets} onClick={() => setShows(!shows)} style={{ marginRight: '8px', marginBottom: '16px' }}>
        Click me!
      </Button>

      <Overlay target={targets.current} show={shows} placement="right" >
        {(props) => (
          <Tooltip id="overlay-example" {...props} >
            My Tooltip
          </Tooltip>
        )}
      </Overlay>

    </>
<br/>
    <>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary" style={{ marginRight: '8px', marginBottom: '16px' }}>Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}
    </>
    </>
    <br/>

    <br/>
    <Card.Title>Popovers</Card.Title>
    <Popovers/>
    <br/>

    <br/>
    <>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary"style={{ marginRight: '8px', marginBottom: '16px' }}>Popover on {placement}</Button>
        </OverlayTrigger>
      ))}
    </>
    <br/>

    <br/>
    <Card.Title>Disabled elements</Card.Title>
    <>
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
      <span className="d-inline-block">
        <Button disabled style={{ pointerEvents: 'none' }}>
          Disabled button
        </Button>
      </span>
    </OverlayTrigger>
    </>
    <br/>

    <br/>
    <Card.Title>Changing containers</Card.Title>
    <>
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Popover bottom</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
    </>
    <br/>

    <br/>
    <Card.Title>Updating position dynamically</Card.Title>
    <Dynamically/>
    </Card.Body>
    </Card>
  );
}

export default Overlays;