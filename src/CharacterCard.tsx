import React from 'react';
import './CharacterCard.css';
import {useNavigate} from "react-router-dom";

export type CharacterCardProps = {
    id: number,
    name: string,
    status: string,
    image: string
}
function CharacterCard(props: CharacterCardProps) {

    const navigate = useNavigate();

    function showDetails() {
    navigate("/character/details/"+props.id)
    }

    return (
        <div className="Characters">
            <div className={props.status === "Alive" ? "alive" : "dead"}>
            <h1> {props.name}</h1>
            <img src={props.image} alt={"Photo fly away"}/>
            <p> {props.status}</p>
                <button onClick={showDetails}>Details</button>
            </div>
        </div>
    );
}
export default CharacterCard;