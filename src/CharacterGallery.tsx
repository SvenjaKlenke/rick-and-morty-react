import React from 'react';
import CharacterCard from "./CharacterCard";
import {PageRM} from "./useCharacters";



type RickAndMortyCharacter = {
    id: number
    name: string
    status: string
    image: string
}


type Props = {
    inputFieldValue: string,
    characters:  RickAndMortyCharacter[]
    loadCharacters: ()=> void
    prevPageUrl: ()=> void,
    nextPageUrl:()=> void
    pageUrl: PageRM
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
                {props.pageUrl.prev === null?<></>:<button onClick={props.prevPageUrl}>PreviousPage</button>}
                {props.pageUrl.next === null?<></>:<button onClick={props.nextPageUrl}>NextPage</button>}
            </div>
            <div>
            {showCharacterS()}
            </div>
        </div>
    );
}

export default CharacterGallery;