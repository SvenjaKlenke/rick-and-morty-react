import React from 'react';
import './CharacterCard.css';

type CharacterCardProps = {

    name: string,
    status: string,
    image: string
}
function CharacterCard(props: CharacterCardProps) {
    return (
        <div className="Characters">
            <h1> {props.name}</h1>
            <img src={props.image} alt={"Photo fly away"}/>
            <p> {props.status}</p>
        </div>
    );
}
export default CharacterCard;