import React, { useEffect, useState } from "react";


function Creators(){
    const [creators, setCreators] = useState([])


    useEffect(() => {
        fetch("http://localhost:9292/creators")
        .then((r) => r.json())
        .then((data) => setCreators(data))
    }, [])

    const list = creators.map((creator)=>{
        return <p>+ {creator.name}</p>
    })

    console.log(list)

    return(
        <div>
        <h3>List of creators:</h3>
        <div>{list}</div>
        </div>
    )
}

export default Creators;