import React, { useState } from "react";
import Edit from "./Edit"


function Post({ creator, id, title, genre, description, price, image, onDeletePost }) {


const [edit, setEdit] = useState(description)

console.log(image)

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
        <div>

            <div className="post"> 
            <h3>Title: {title}</h3>
            <h3>Genre: {genre} </h3>
            <p>Description: {edit}</p>
            <p>Creator: {creator}</p>
            <p>Price: ${price}</p>
            <img src={image}></img>

            <p></p><Edit id={id} newEditing={newEditing} edit={edit} setEdit={setEdit}/>
            <button onClick={handleDeleteClick}> Delete Post</button>


            </div>
        </div>
    )
}

export default Post;
