import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewPost() {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");


    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            post : { name, user, image, location, date }
        }
        fetch("/sites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then(data => {
            history.push(`/projects/${data.project.id}`)
        })
    }

    return (
        <section>
        <h3> Submit a new post! </h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
            type="text"
            id="title"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <label>User</label>
            <input
            type="text"
            id="user"
            value={user}
            onChange={e => setUser(e.target.value)}
            />
            <label>Image Url</label>
            <input
            type="text"
            id="image"
            value={image}
            onChange={e => setImage(e.target.value)}
            />
            <label>Location</label>
            <input
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            />
            <label>Date</label>
            <input
            type="text"
            id="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            />
            </form>
            </section>
    )

}

export default NewPost;