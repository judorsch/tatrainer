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
  const [answerRevealed, reveal] = useState<boolean>(false);
  return (
    <Container className="App">
      <Row>
        <ControlPanel setCard={setActiveCard} reveal={reveal} answerRevealed={answerRevealed}></ControlPanel>
        <CardViewer card={activeCard} answerRevealed={answerRevealed}></CardViewer>
      </Row>
    </Container>
  );
}

export default App;
