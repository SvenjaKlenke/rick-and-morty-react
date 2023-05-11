import React, {useEffect, useState} from "react";
import axios from "axios";


type RMPrevPage ={
    prevUrl: string
}

function PreviousPage() {

    const [pageUrlPrev, setPageUrlPrev]= useState<RMPrevPage>();



    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) =>{
                setPageUrlPrev(response.data.info.prev)
            })
    },[])

    function previousPageUrl() {
        return pageUrlPrev
    }
    console.log(pageUrlPrev)

    return (

        <button onClick={previousPageUrl}>PreviousPage</button>

    );
}
export default PreviousPage;

