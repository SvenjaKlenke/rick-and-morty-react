import React from 'react';
import CharacterCard from "./CharacterCard";



type RickAndMortyCharacter = {
    id: number
    name: string
    status: string
    image: string
}


type Props = {
    inputFieldValue: string,
        characters:  RickAndMortyCharacter[]
}

function CharacterGallery(props : Props) {


    function showCharacterS (){
        if (props.inputFieldValue === ""){
            return props.characters.map((character) => <CharacterCard key = {character.id} name={character.name} status={character.status} image={character.image} id={character.id}/>)
        }else {
            const newArray = props.characters.filter((character ) => character.name.toLowerCase().includes(props.inputFieldValue.toLowerCase()))
            return newArray.map((character) => <CharacterCard key = {character.id} name={character.name} status={character.status} image={character.image} id={character.id}/>)
        }
    }

    return (
        <div>
            <div>
            {showCharacterS()}
            </div>
        </div>
    );
}

export default CharacterGallery;