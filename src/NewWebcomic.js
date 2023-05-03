import React, { useState } from "react";
import styled from "styled-components";

function NewWebcomic({ addNew }){
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            title, genre, description, price
        }
        console.log(formData)
        fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r)=>r.json())
        .then((newWebcomic)=> addNew(newWebcomic))

        setTitle("");
        setGenre("");
        setDescription("");
        setPrice("");
    }

    return(
        <Detail>
            <h2>Submit New Webcomic</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={e=> setTitle(e.target.value)}
                />
                <label>  Genre</label>
                <input
                type="text"
                id="genre"
                value={genre}
                onChange={e=> setGenre(e.target.value)}
                />
                <label>  Description</label>
                <input
                type="text"
                id="description"
                value={description}
                onChange={e=> setDescription(e.target.value)}
                />
                <label>  Price</label>
                <input
                type="text"
                id="price"
                value={price}
                onChange={e=> setPrice(e.target.value)}
                />
                <button type="submit"> Submit </button>
            </form>
            <p></p>
        </Detail>
    )
}

export default NewWebcomic;

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