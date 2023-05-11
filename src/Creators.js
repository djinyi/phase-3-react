import React, { useEffect, useState } from "react";


function Creators(){
    const [creators, setCreators] = useState("")


    useEffect(() => {
        fetch("http://localhost:9292/creators")
        .then((r) => r.json())
        .then((data) => setCreators(data))
    }, [])

    const list = creators.map((creator) => (
        <p>*{creator.name}</p>
    ))

    return(
        <div>
        <h3>List of creators:</h3>
        <p>{list}</p>
        </div>
    )
}

export default Creators;