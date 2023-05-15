import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./CharacterGallery";
import {Route, Routes} from "react-router-dom";
import DetailsCard from "./DetailsCard";

import useCharacters from "./useCharacters";


function App() {


    const [inputFieldValue, setInputFieldValue] = useState ("");
    const {characters, loadCharacters, prevPageUrl, nextPageUrl, pageUrl}= useCharacters()
    


    function useTextInput (event:ChangeEvent<HTMLInputElement>){
        setInputFieldValue((event.target.value))    }


    
    return (
    <div className="App">
        <input type="text" placeholder={"Please give us a name"} value={inputFieldValue}
               onChange={useTextInput}/>
        <br/>

        <Routes>
            <Route path={"/"} element={<CharacterGallery characters={characters} inputFieldValue={inputFieldValue}
                                                         loadCharacters={loadCharacters} nextPageUrl={nextPageUrl}
                                                         prevPageUrl={prevPageUrl} pageUrl={pageUrl}/>} />
            <Route path={"/character/details/:id"} element ={<DetailsCard characters={characters}/>}/>
        </Routes>
    </div>
  );
}

export default App;
