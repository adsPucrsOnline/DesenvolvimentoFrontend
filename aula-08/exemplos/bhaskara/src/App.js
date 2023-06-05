import React, { useState } from 'react';
import { calcularRaizes } from './Bhaskara';
import { Button, Card, Form } from 'react-bootstrap';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [raizes, setRaizes] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'a') setA(value);
    if (name === 'b') setB(value);
    if (name === 'c') setC(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const raizesCalculadas = calcularRaizes(Number(a), Number(b), Number(c));
    setRaizes(raizesCalculadas);
  };

  const renderRaizes = () => {
    console.log(raizes)
    if (raizes[0] ==="na") {
      return <p>NÃO Existem raízes reais.</p>;
    } else if (raizes.length === 1) {
      return <p>Existem duas raízes iguais: {raizes[0]}</p>;
    } else {
      return (
        <>
        <p> Existem duas raízes reais diferentes: </p>
          <ul>
            {raizes.map((raiz, index) => (
              <li key={index}>{raiz}</li>
            ))}
          </ul>
          </>
      );
    }
  };

  return (
    <Card style={{ width: '18rem',  margin: '10px' }}>
      <Card.Body>
        <h3>Cáculo Bhaskara</h3>
      <Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formA">
          <Form.Label>a:</Form.Label>
          <Form.Control type="number" name="a" value={a} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="formB">
          <Form.Label>b:</Form.Label>
          <Form.Control type="number" name="b" value={b} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="formC">
          <Form.Label>c:</Form.Label>
          <Form.Control type="number" name="c" value={c} onChange={handleInputChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Calcular</Button>
      </Form>
      </Card.Title>
      <Card.Text>
      {raizes.length > 0 && (
        <div>
          <p>Raízes:</p>
          {renderRaizes()}
        </div>
      )}
      </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default App;
