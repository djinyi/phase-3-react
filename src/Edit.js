import React from "react";
import styled from "styled-components";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';


function Edit({id, newEditing, edit, setEdit}){


function handleChange(e, setFn) {
  setFn(e.target.value)
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
    return(
        <Detail>
        <label> Edit Description: </label>
        <form onSubmit={handleSave}>
          <EditText
          name="textbox"
          style={{width: '200px', marginLeft: '700px'}} 
          value={edit}
          onChange={(e) => handleChange(e, setEdit)}
          showEditButton />
          <button> Submit </button>
          </form>
          </Detail>
    )
}

export default Edit;


const Detail = styled.div`
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif
`