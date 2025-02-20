import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function FormularioReact() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <br></br>
                    <br></br>
                    <Card className="text-center">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>Contáctanos</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="ejemplo@email.com" />
                                </Form.Group>
                                <br></br>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Consulta</Form.Label>
                                    <Form.Control type="text" placeholder="Escribe aquí..." />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-muted"><Button variant="primary">Enviar</Button></Card.Footer>
                    </Card>
                    <br></br>
                    <br></br>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default FormularioReact;