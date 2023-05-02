import React, { useState } from "react";
import Edit from "./Edit"


function Post({ creator, id, title, genre, description, price, onDeletePost }) {

const [showEdit, setShowEdit] = useState(true);
const [edit, newEdit] = useState(description)



function handleDeleteClick() {
    fetch(`http://localhost:9292/posts/${id}`, {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then((post) => onDeletePost(post))
 }

const site=`http://localhost:9292/posts/${id}`;

function newEditing(description) {
newEdit(description)
}


    return (
        <div>

            <div className="post"> 
            <h3>Title: {title}</h3>
            <h3>Genre: {genre} </h3>
            <p>Description: {edit}</p>
            <p>Creator ID: {creator}</p>
            <p>Price: ${price}</p>
            <img src="https://i.imgur.com/qxIUf4O.png"></img>

            <p></p><Edit id={id} newEditing={newEditing}/>
            <button onClick={handleDeleteClick}> Delete </button>


            </div>
        </div>
    )
}

export default Post;