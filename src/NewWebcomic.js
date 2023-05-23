import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function NewWebcomic({ addNew }){
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [creator_id, setCreator_id] = useState([]);

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            title, genre, description, price, image, creator_id
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
        setImage("")

        newPage();
    }

    function newPage(){
        history.push('/posts')
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
                <label>  Image</label>
                <input
                type="text"
                id="image"
                value={image}
                onChange={e=> setImage(e.target.value)}
                />
                <label>Creator
                <select onChange={e=>setCreator_id(e.target.value)}>
                <option value="81">81</option>
                <option value="82">82</option>
                <option value="87">87</option>
                </select>
                </label>
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