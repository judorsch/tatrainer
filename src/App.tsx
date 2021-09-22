import React, { useState } from 'react';
import './App.css';
import CARDS from './asset/cards.json';
import { CardViewer } from './Components/CardViewer';
import { ControlPanel } from './Components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import {Card} from './interfaces/card';

function App(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Card>(CARDS[0] as Card);
  return (
    <Container className="App">
      <Row>
        <ControlPanel setCard={setActiveCard}></ControlPanel>
        <CardViewer card={activeCard}></CardViewer>
      </Row>
    </Container>
  );
}

export default App;
