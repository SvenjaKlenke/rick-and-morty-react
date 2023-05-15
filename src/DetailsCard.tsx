import React from 'react';
import {useParams} from "react-router-dom";
import {CharacterCardProps} from "../src/CharacterCard";

type Props = {
    characters: CharacterCardProps[]
}

function DetailsCard(props:Props) {

    const params = useParams()
    const id:string | undefined = params.id
    if (!id) return <div>ID not found</div>


    const foundCharacter: CharacterCardProps | undefined = props.characters.find (currentCharacter => currentCharacter.id === parseInt(id))

    return (
        <div>
            <h1>Details from: {foundCharacter?.name}</h1>
            <h2>Status:  {foundCharacter?.status}</h2>
        </div>
    );
}

export default DetailsCard;