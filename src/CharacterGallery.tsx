import React from 'react';
import Characters from './Characters.json'
import CharacterCard from "./CharacterCard";




function CharacterGallery() {

    return (
        <section>
            {Characters.map((character) => <CharacterCard key = {character.id} name={character.name} status={character.status} image={character.image}/>)}
        </section>
    );
}

export default CharacterGallery;