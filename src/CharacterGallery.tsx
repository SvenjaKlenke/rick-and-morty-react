import React, {ChangeEvent, useEffect, useState} from 'react';
import CharacterCard from "./CharacterCard";
import axios from "axios";
import NextPage from "./NextPage";
import PreviousPage from "./PreviousPage";


type RickAndMortyCharacter = {
    id: number
    name: string
    status: string
    image: string
}
function CharacterGallery() {
    const [characters, setCharacters]= useState<RickAndMortyCharacter[]>([]);
    const [inputFieldValue, setInputFieldValue] = useState ("");

    useEffect( ()=> {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results);
            })
    },[])



    function useTextInput (event:ChangeEvent<HTMLInputElement>){
        setInputFieldValue((event.target.value))    }

    function showCharacterS (){
        if (inputFieldValue === ""){
            return characters.map((character) => <CharacterCard key = {character.id} name={character.name} status={character.status} image={character.image}/>)
        }else {
            const newArray = characters.filter((character ) => character.name.toLowerCase().includes(inputFieldValue.toLowerCase()))
            return newArray.map((character) => <CharacterCard key = {character.id} name={character.name} status={character.status} image={character.image}/>)
        }
    }



    return (
        <div>
            <input type="text" placeholder={"Please give us a name"} value={inputFieldValue}
            onChange={useTextInput}/>
            <br/>
            <PreviousPage/><NextPage/>
            <br/>
            <div>
            {showCharacterS()}
            </div>
        </div>
    );
}

export default CharacterGallery;