import React, { useEffect, useState } from "react";
import Webcomic from "./Webcomic";
import NewWebcomic from "./NewWebcomic";
import styled from "styled-components";
import Creators from "./Creators";
import NewCreators from "./NewCreators"

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/posts")
        .then((r) => r.json())
        .then(data => setPosts(data))
    }, [])

    function handleDeletePost(post) {
        const updatedPosts = posts.filter((poster) => poster.id !== post.id);
        setPosts(updatedPosts)
    }
    
    const post = posts.map((webcomic) => (
        <Webcomic
        key={webcomic.id}
        id={webcomic.id}
        title={webcomic.title}
        genre={webcomic.genre}
        description={webcomic.description}
        creator={webcomic.id}
        price={webcomic.price}
        image={webcomic.image}
        onDeletePost={handleDeletePost}
        />
    ))

    function addNew(newWebcomic){
        setPosts([...posts, newWebcomic])
    }

    return(
        <PostStyle className="body">
            <h2>Webcomics for Birds</h2>
            <div><NewCreators /></div>
            <div><Creators /></div>
            <div>{post}</div>
            <NewWebcomic addNew={addNew}/>
        </PostStyle>
    )
}

export default Posts;

const PostStyle = styled.div`
h2{
    font-size: 40px;
    text-align: center;
    padding: 25px 45px 25px 45px;
    background-color: rgba(135, 206, 235, .2);
}
`