import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import css from './Carousels.module.css'

function Carousels() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Card border="dark" className={css.container}>
    <Card.Header className={css.title}>Carousels</Card.Header>
    <Card.Body>
    <Card.Title>Example</Card.Title>
    <Carousel>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="Card image" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="Card image" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="Card image" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<br/>

<br/>
    <Card.Title>Controlled</Card.Title>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="Card image" />
        <Carousel.Caption>
          <br/>

          <br/>
    <Card.Title>First slide label</Card.Title>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="Card image" />
        <Carousel.Caption>
          <br/>

          <br/>
  <Card.Title>Second slide label</Card.Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="Card image" />
        <Carousel.Caption>
          <br/>

          <br/>
    <Card.Title>Third slide label</Card.Title>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>

    <br/>
    <Card.Title>Crossfade</Card.Title>
    <Carousel fade>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="First slide" />
        <Carousel.Caption>

          <br/>

          <br/>
          <Card.Title>First slide label</Card.Title>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="First slide" />
        <Carousel.Caption>
          <br/>

          <br/>
          <Card.Title>Second slide label</Card.Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="First slide" />
        <Carousel.Caption>
          <br/>

          <br/>
          <Card.Title>Third slide label</Card.Title>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<br/>

<br/>
    <Card.Title>No transition animation</Card.Title>
    <Carousel slide={false}>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="First slide" />
        <Carousel.Caption>
          <br/>

          <br/>
          <Card.Title>First slide label</Card.Title>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="First slide" />
        <Carousel.Caption>
        <br/>

<br/>

          <Card.Title>Second slide label</Card.Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>

<br/>
    <Card.Title>Individual Item Intervals</Card.Title>
    <Carousel>
      <Carousel.Item interval={1000}>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="First slide" />
        <Carousel.Caption>
        <br/>

<br/>
          <Card.Title>First slide label</Card.Title>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="First slide" />
        <Carousel.Caption>
        <br/>

<br/>         
          <Card.Title>Second slide label</Card.Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src="https://via.placeholder.com/416x160" alt="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>

<br/>
    <Card.Title>Dark variant</Card.Title>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/416x160?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/416x160?text=First slide&bg=f5f5f5"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/416x160?text=First slide&bg=f5f5f5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Card.Body>
    </Card>
    
  );
}

export default Carousels;