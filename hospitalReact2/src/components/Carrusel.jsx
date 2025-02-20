import React from 'react';
import { Carousel } from 'react-bootstrap';
import hospital2 from '../assets/hospital2.jpg';
import hospital3 from '../assets/hospital3.jpg';
import hospital4 from '../assets/hospital4.jpg';


const CarruselReact = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={ hospital2 } alt="Primera" />
        <Carousel.Caption>
          <h3>Primera Imagen</h3>
          <p>Descripción.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={ hospital3 } alt="Segunda" />
        <Carousel.Caption>
          <h3>Segunda Imagen</h3>
          <p>Descripción.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src={ hospital4 } alt="Tercera" />
        <Carousel.Caption>
          <h3>Tercera Imagen</h3>
          <p>Descripción.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default CarruselReact;