import React, { useState } from "react";
import styled from "styled-components";


function Edit({id, newEditing}){
const [description, setDescription] = useState([])

function handleUp(e) {

    e.preventDefault();
    console.log(description, id)
       
       fetch(`http://localhost:9292/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: description
        }),
    })
    .then((r) => r.json())
    .then((updated) => newEditing(updated.description))

    setDescription("");
}

    return(
        <div>
        <label> Edit Description: </label>
        <form onSubmit={handleUp}>

            <input
            type="text"
            id="title"
            placeholder="Type in new description..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            />

            <button> Submit </button>
            </form>
            </div>
    )
}

export default Edit;

const FormStyle= styled.div`
input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
button{
    background-color: #87CEEB;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }
`