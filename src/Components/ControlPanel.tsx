import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../asset/cards.json'
import { getRandomElement } from '../utilities/data';
import { UserList } from './UserList';


export function ControlPanel({setCard, reveal, answerRevealed}: {setCard:(c: Card)=>void, reveal:(r:boolean)=>void, answerRevealed:boolean}): JSX.Element{
    function setRandomCard(){
        reveal(false);
        setCard(getRandomElement(CARDS as Card[]))
    }
    return( 
    <Col>
        <h1>Control Panel</h1> 
        <UserList></UserList>
        <Button onClick={setRandomCard} className="m-4">Swap Current Card</Button>
        <Button onClick={()=>reveal(!answerRevealed)} className="m-4">Reveal Answer</Button>
    </Col>)
}