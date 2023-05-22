import React, { useState } from "react";
import styled from "styled-components";

function NewCreator({addNew}){
    const [name, setName] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name
        }
        console.log(formData)
        fetch("http://localhost:9292/creators", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r)=>r.json())
        .then((newCreator)=> addNew(newCreator))

        setName("")
    }

    return(
        <Detail>
            <h2>Submit New Creator</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={e=> setName(e.target.value)}
                />
                <button type="submit"> Submit </button>
            </form>
            <p></p>
        </Detail>
    )
}

export default NewCreator;

const Detail = styled.div`
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif
button{
    margin-left: 10px;
}
h2{
    font-size: 30px;
    text-align: center;
    padding: 25px 45px 25px 45px;
    background-color: rgba(135, 206, 235, .2);
}
p{
    margin-bottom: 50px
}
`