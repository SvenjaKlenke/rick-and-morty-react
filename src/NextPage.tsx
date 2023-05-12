import React, {useEffect, useState} from 'react';
import axios from "axios";




function NextPage() {

    const [pageUrlNext, setPageUrlNext]= useState("https://rickandmortyapi.com/api/character");

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) =>{
                setPageUrlNext(response.data.info.next)
            })
    },[pageUrlNext])


    function nextPageUrl() {
        return pageUrlNext

    }
    console.log(pageUrlNext)

    return (

        <button onClick={nextPageUrl}>NextPage</button>
    );
}

export default NextPage;