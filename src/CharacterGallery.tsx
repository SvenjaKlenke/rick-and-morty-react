import React, {ChangeEvent, useEffect, useState} from 'react';
import CharacterCard from "./CharacterCard";
import axios from "axios";


type RickAndMortyCharacter = {
    id: number
    name: string
    status: string
    image: string
}
type PageRM ={
    next:string
    prev:string
}


function CharacterGallery() {

    const [characters, setCharacters]= useState<RickAndMortyCharacter[]>([]);
    const [inputFieldValue, setInputFieldValue] = useState ("");
    const [pageUrl, setPageUrl]= useState<PageRM>({next:"",prev:""});
    const [rmUrl, setRmUrl]= useState("https://rickandmortyapi.com/api/character")

    function nextPageUrl() {
        setRmUrl(pageUrl.next)
    }
    function prevPageUrl() {
        setRmUrl(pageUrl.prev)

    }
    useEffect( ()=> {
            axios.get(rmUrl)
                .then((response) => {
                    setCharacters(response.data.results);
                    setPageUrl(response.data.info)

                })
        },[rmUrl])

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
            {pageUrl.prev === null?<></>:<button onClick={prevPageUrl}>PreviousPage</button>}
            {pageUrl.next === null?<></>:<button onClick={nextPageUrl}>NextPage</button>}
            <div>
            {showCharacterS()}
            </div>
        </div>
    );
}

export default CharacterGallery;