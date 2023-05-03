import React, { useState } from "react";
import Edit from "./Edit";
import styled from "styled-components";


function Webcomic({ creator, id, title, genre, description, price, image, onDeletePost }) {


const [edit, setEdit] = useState(description)


function handleDeleteClick() {
    fetch(`http://localhost:9292/posts/${id}`, {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then((post) => onDeletePost(post))
 }

const site=`http://localhost:9292/posts/${id}`;

function newEditing(description) {
setEdit(description)
}


    return (
        <ComicDetail>
            <div className="post"> 
            <h3>Title: {title}</h3>
            <h3>Genre: {genre} </h3>
            <p>Description: {edit}</p>
            <p>Creator: {creator}</p>
            <p>Price: ${price}</p>
            <img src={image}></img>
            <Edit id={id} newEditing={newEditing} edit={edit} setEdit={setEdit}/>
            <button onClick={handleDeleteClick}> Delete Post</button>
            <p>_____________________________________</p>
            </div>
        </ComicDetail>
    )
}

export default Webcomic;

const ComicDetail = styled.div`
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif
h3{
    font-size:30px;
    border-bottom:solid;
    border-color:#42ddf5
}
.wrapper{
    display:flex;
    div{
        margin:10px;
    }
}
img{
    width:600px;
    margin: 10px;
}
button{
    margin-top: 10px;
}
`
