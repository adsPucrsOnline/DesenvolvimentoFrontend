import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Button, Row, Col, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getTokenMsg} from './firebase';

function App() {

  const [show, setShow] = useState(false);
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    getTokenMsg(setTokenFound);
  }, []);

  return (
    <div className="App">
      
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
        position: 'absolute',
        top: 20,
        right: 20,
      }}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">Notificações</strong>
          <small>12 mins ago</small>
        </Toast.Header>
        <Toast.Body>Existem algumas novas atualizações que você pode adorar!!</Toast.Body>
      </Toast>
      <header className="App-header">
      {isTokenFound &&
        'Prmissão de notificação Habilitada👍🏻 '
      }
      {!isTokenFound &&
        'Precisa de permissão de notificação ❗️'
      }
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </header>
    </div>
  );
}

export default App;

