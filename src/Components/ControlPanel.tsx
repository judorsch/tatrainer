import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../asset/cards.json'
import { getRandomElement } from '../utilities/data';


export function ControlPanel({setCard, reveal, answerRevealed}: {setCard:(c: Card)=>void, reveal:(r:boolean)=>void, answerRevealed:boolean}): JSX.Element{
    function setRandomCard(){
        setCard(getRandomElement(CARDS as Card[]))
    }
    return( 
    <Col>
        <h1>Control Panel</h1> 
        <Button onClick={setRandomCard}>Swap Current Card</Button>
        <Button onClick={()=>reveal(!answerRevealed)}>Reveal Answer</Button>
    </Col>)
}