import React, {useEffect, useState} from 'react';
import axios from "axios";


type RMNextPage ={
    nextUrl: string
}

function NextPage() {

    const [pageUrlNext, setPageUrlNext]= useState<RMNextPage>();

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) =>{
                setPageUrlNext(response.data.info.next)
            })
    },[])


    function nextPageUrl() {
        return pageUrlNext

    }
    console.log(pageUrlNext)

    return (

        <button onClick={nextPageUrl}>NextPage</button>


    );
}

export default NextPage;