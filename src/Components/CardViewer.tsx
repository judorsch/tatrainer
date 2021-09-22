import {Col} from 'react-bootstrap'
import { Card } from '../interfaces/card'


export function CardViewer({card}: {card:Card}): JSX.Element {
    return( 
    <Col>
        <h1>Card Viewer</h1>
        <div>Prompt: {card.prompt}</div>
        <div>Suggested Answer: {card.answer}</div>
    </Col>)
}