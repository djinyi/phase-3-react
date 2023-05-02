import React, { useState } from "react";
import styled from "styled-components";
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';


function Edit({id, newEditing, edit, setEdit}){


function handleChange(e, setFn) {

  setFn(e.target.value)
  console.log(edit)
}

function handleSave(e){

  e.preventDefault();

       fetch(`http://localhost:9292/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: edit
        }),
    })
    .then((r) => r.json())
    .then((updated) => newEditing(updated.description))


}
console.log(edit)


    return(
        <div>
        <label> Edit Description: </label>
<form onSubmit={handleSave}>
          <EditText
          name="textbox"
          style={{width: '200px'}} 
          value={edit}
          onChange={(e) => handleChange(e, setEdit)}
  
          showEditButton />
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