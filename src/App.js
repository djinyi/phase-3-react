import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "./Posts";
import NewWebcomic from "./NewWebcomic";
import NavBar from "./NavBar";
import Creators from "./Creators";
import NewCreators from "./NewCreators"
import Webcomic from "./Webcomic";

function App(){
    
    const [posts, setPosts] = useState([]);
    const [creators, setCreators] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/posts")
        .then((r) => r.json())
        .then(data => setPosts(data))
    }, [])

    function handleDeletePost(post) {
        const updatedPosts = posts.filter((poster) => poster.id !== post.id);
        setPosts(updatedPosts)
    }

    console.log(posts)
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

    useEffect(() => {
        fetch("http://localhost:9292/creators")
        .then((r) => r.json())
        .then((data) => setCreators(data))
    }, [])

    const list = creators.map((creator)=>{
        return <p>{creator.name}</p>
    })


    function addNewCreator(newCreator){
        setCreators([...creators, newCreator])
    }
    
    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/posts">
                    <Posts post={post}/>
                </Route>
                <Route exact path="/newwebcomic">
                    <NewWebcomic addNew={addNew}/>
                </Route>
                <Route exact path="/creators">
                    <Creators list={list}/>
                </Route>
                <Route exact path="/newcreators">
                    <NewCreators addNew={addNewCreator}/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;



