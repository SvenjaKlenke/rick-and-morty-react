import {useEffect, useState} from "react";
import axios from "axios";


export type PageRM ={
    next:string
    prev:string
}

type RickAndMortyCharacter = {
    id: number
    name: string
    status: string
    image: string
}
export default function useCharacters(){

    const [characters, setCharacters]= useState<RickAndMortyCharacter[]>([]);
    const [pageUrl, setPageUrl]= useState<PageRM>({next:"",prev:""});
    const [rmUrl, setRmUrl]= useState("https://rickandmortyapi.com/api/character");

    function loadCharacters(){
        axios.get(rmUrl)
            .then((response) => {
                setCharacters(response.data.results);
                setPageUrl(response.data.info)

            })

    }
    useEffect(loadCharacters, [rmUrl])

    function nextPageUrl() {
        setRmUrl(pageUrl.next)
    }
    function prevPageUrl() {
        setRmUrl(pageUrl.prev)

    }

    return {characters, loadCharacters, prevPageUrl, nextPageUrl, pageUrl}
}