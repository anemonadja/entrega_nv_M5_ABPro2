import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Doctores = () => {

    const [doctores, setDoctores] = useState([]);

    const obtenerDoctores = async () => {
        const respuesta = await axios.get('https://randomuser.me/api/?results=10');
        console.log(respuesta.data.results);
        setDoctores(respuesta.data.results);
    }

    useEffect(() => {
      obtenerDoctores();
    }, []);


  return (
    <section>
      <h1 className='text-center text-danger'>Doctores</h1>
      <Button variant="primary" onClick={obtenerDoctores} >Actualizar</Button>



      <Container>
        <Row lg={5}>
        {doctores.map((doctor) => (
          <Col className='mb-3'>
            <Card style={{ width: "14rem" }} className='bg-info h-100'>
              <Card.Img variant="top" src={doctor.picture.large}/>
              <Card.Body>
                {/* <Card.Title>{doctor.name.title + ' ' + doctor.name.first + ' ' + doctor.name.last}</Card.Title> */}
                <Card.Title>{`${doctor.name.title}  ${doctor.name.first}  ${doctor.name.last}`}</Card.Title> 
                <Card.Text>{doctor.email}</Card.Text>
                <Card.Text>{doctor.location.city}</Card.Text>
                <Card.Text>{doctor.location.timezone.description}</Card.Text>
                <Button variant="primary">Ver detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </Container>


    </section>
  );
}

export default Doctores