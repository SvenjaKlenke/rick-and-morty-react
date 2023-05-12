import React, {useEffect, useState} from "react";
import axios from "axios";





function PreviousPage() {

    const [pageUrlPrev, setPageUrlPrev]= useState("https://rickandmortyapi.com/api/character");



    useEffect(() => {
        axios.get(pageUrlPrev)
            .then((response) =>{
                setPageUrlPrev(response.data.info.prev)
            })
    },[pageUrlPrev])

    function previousPageUrl() {
        return pageUrlPrev
    }
    console.log(pageUrlPrev)

    return (

        <button onClick={previousPageUrl}>PreviousPage</button>

    );
}
export default PreviousPage;

