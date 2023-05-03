import React, { useState } from "react"

function NewWebcomic({ addNew }){
    const [title, setTitle] = useState("");
    const [creator, setCreator] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");



    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            title, creator, genre, description, price, image
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
        setCreator("")
        setGenre("");
        setDescription("");
        setPrice("");
        setImage("");
    }

    return(
        <div>
            <h3>Submit New Webcomic</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={e=> setTitle(e.target.value)}
                />
                <label>  Creator</label>
                <input
                type="text"
                id="creator"
                value={creator}
                onChange={e=> setCreator(e.target.value)}
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
                <label>  Image URL</label>
                <input
                type="text"
                id="image"
                value={image}
                onChange={e=> setImage(e.target.value)}
                />
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default NewWebcomic