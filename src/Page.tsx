
import axios from "axios";
import React, {useEffect, useState} from "react";

type PageRM ={
    next:string
    prev:string
}

function Page() {

    const [pageUrl, setPageUrl]= useState<PageRM>({next:"",prev:""});
    const [rmUrl, setRmUrl]= useState("https://rickandmortyapi.com/api/character")

    useEffect( ()=> {
        axios.get(rmUrl)
            .then((response) => {
                setPageUrl(response.data.info)
            })
    },[rmUrl])

    function nextPageUrl() {
        setRmUrl(pageUrl.next)
    }
    function prevPageUrl() {
        setRmUrl(pageUrl.prev)

    }

    return (
        <div>
            {pageUrl.prev === null?<></>:<button onClick={prevPageUrl}>PreviousPage</button>}
            {pageUrl.next === null?<></>:<button onClick={nextPageUrl}>NextPage</button>}
        </div>
    );
}

export default Page;