import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../asset/cards.json'
import { getRandomElement, shuffle } from '../utilities/data';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task as User} from 'editable-dnd-list';

export const LOCAL_STORAGE_USERS = 'ta-trainer-users';
export const INITIAL_USERS:User[] = [
    {id: '1', text:"Dr. Bart"},
    {id: '2', text:"Ada Bart"},
    {id: '3', text:"Babbage Bart"},
    {id: '4', text:"Pumpkin Bart"},
    {id: '5', text:"Ellie Bart"}
];

export function getLocalStorageUsers(): User[]{
    let rawUsers: string|null = localStorage.getItem(LOCAL_STORAGE_USERS);
    if(rawUsers === null){
        return [...INITIAL_USERS];
    }
    else{
        return JSON.parse(rawUsers);
    }

}

export function ControlPanel({setCard, reveal, answerRevealed}: {setCard:(c: Card)=>void, reveal:(r:boolean)=>void, answerRevealed:boolean}): JSX.Element{
    const [users, setUsers] = useState<User[]>(getLocalStorageUsers());
    const [deck, setDeck] = useState<Card[]>(CARDS);
    function setRandomCard(){
        reveal(false);
        setCard(getRandomElement(deck))
    }
    function shuffleUsers(){
        setUsers([...shuffle(users)]);
    }
    function save(){
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users));
    }
    function addNewCard(){
        const newCard: Card = {
            id: Math.random(),
            kind: "Custom",
            prompt: window.prompt("What do you want the prompt to be?") || "NO PROMPT",
            answer: window.prompt("What should the answer be?") || "NO ANSWER",
        };
        setDeck([...deck, newCard])

    }
    return( 
    <Col>
        <h1>Control Panel</h1> 
        <UserList users={users} setUsers={setUsers}></UserList>
        <Button onClick={setRandomCard} className="m-4">Swap Current Card</Button>
        <Button onClick={()=>reveal(!answerRevealed)} className="m-4">Reveal Answer</Button>
        <Button onClick={shuffleUsers} className="m-4">Shuffle Users</Button>
        <Button onClick={save} className="m-4" variant="success">Save</Button>
        <Button onClick={addNewCard} className="m-4">Add New Card</Button>
    </Col>)
}