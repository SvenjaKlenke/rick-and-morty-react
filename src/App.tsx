import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./CharacterGallery";
import {Route, Routes} from "react-router-dom";
import DetailsCard from "./DetailsCard";
import axios from "axios";

type PageRM ={
    next:string
    prev:string
}

type RickAndMortyCharacter = {
    id: number
    name: string
    status: string
    image: string
}
function App() {

    const [characters, setCharacters]= useState<RickAndMortyCharacter[]>([]);
    const [pageUrl, setPageUrl]= useState<PageRM>({next:"",prev:""});
    const [rmUrl, setRmUrl]= useState("https://rickandmortyapi.com/api/character")
    const [inputFieldValue, setInputFieldValue] = useState ("");
    
    useEffect( ()=> {
        axios.get(rmUrl)
            .then((response) => {
                setCharacters(response.data.results);
                setPageUrl(response.data.info)

            })
    },[rmUrl])

    function useTextInput (event:ChangeEvent<HTMLInputElement>){
        setInputFieldValue((event.target.value))    }

    function nextPageUrl() {
        setRmUrl(pageUrl.next)
    }
    function prevPageUrl() {
        setRmUrl(pageUrl.prev)

    }
    
    return (
    <div className="App">
        <input type="text" placeholder={"Please give us a name"} value={inputFieldValue}
               onChange={useTextInput}/>
        <br/>
        {pageUrl.prev === null?<></>:<button onClick={prevPageUrl}>PreviousPage</button>}
        {pageUrl.next === null?<></>:<button onClick={nextPageUrl}>NextPage</button>}
        <Routes>
            <Route path={"/"} element={<CharacterGallery characters={characters} inputFieldValue={inputFieldValue}/>} />
            <Route path={"/character/details/:id"} element ={<DetailsCard characters={characters}/>}/>
        </Routes>
    </div>
  );
}

export default App;
