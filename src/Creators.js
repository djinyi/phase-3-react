import React, { useState } from "react";


function Creators(){
    const [creators, setCreators] = useState("")


    useEffect(() => {
        fetch("http://localhost:9292/creators")
        .then((r) => r.json())
        .then((data) => setCreators(data))
    }, [])

    const list = creators.map((creator) => (
        <p>Creator: {creator.name}</p>
    ))

    return(
        <p>{list}</p>
    )
}

export default Creators;