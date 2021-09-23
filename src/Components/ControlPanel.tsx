import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../asset/cards.json'
import { getRandomElement, shuffle } from '../utilities/data';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task as User} from 'editable-dnd-list';


export function ControlPanel({setCard, reveal, answerRevealed}: {setCard:(c: Card)=>void, reveal:(r:boolean)=>void, answerRevealed:boolean}): JSX.Element{
    const [users, setUsers] = useState<User[]>([
        {id: '1', text:"Dr. Bart"},
        {id: '2', text:"Ada Bart"},
        {id: '3', text:"Babbage Bart"},
        {id: '4', text:"Pumpkin Bart"},
        {id: '5', text:"Ellie Bart"}
    ]);
    function setRandomCard(){
        reveal(false);
        setCard(getRandomElement(CARDS as Card[]))
    }
    function shuffleUsers(){
        setUsers([...shuffle(users)]);
    }
    return( 
    <Col>
        <h1>Control Panel</h1> 
        <UserList users={users} setUsers={setUsers}></UserList>
        <Button onClick={setRandomCard} className="m-4">Swap Current Card</Button>
        <Button onClick={()=>reveal(!answerRevealed)} className="m-4">Reveal Answer</Button>
        <Button onClick={shuffleUsers} className="m-4">Shuffle Users</Button>
    </Col>)
}