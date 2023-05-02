import React, { useEffect, useState } from "react";
import Webcomic from "./Webcomic";
import NewWebcomic from "./NewWebcomic";

function PostList() {
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
        creator={webcomic.creator.name}
        price={webcomic.price}
        image={webcomic.image}
        onDeletePost={handleDeletePost}
        />
    ))

    function addNew(newWebcomic){
        setPosts([...posts, newWebcomic])
    }

    return(
        <div className="body">
            <h2>Posts</h2>
            <div>{post}</div>
            <NewWebcomic addNew={addNew}/>
        </div>
    )
}

export default PostList;