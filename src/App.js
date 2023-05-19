import React from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "./Posts";
import NewWebcomic from "./NewWebcomic";
import NavBar from "./NavBar";
import Creators from "./Creators";
import NewCreators from "./NewCreators"

function App(){
    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/posts">
                    <Posts />
                </Route>
                <Route exact path="/newwebcomic">
                    <NewWebcomic />
                </Route>
                <Route exact path="/creators">
                    <Creators />
                </Route>
                <Route exact path="/newcreators">
                    <NewCreators />
                </Route>
            </Switch>
        </div>
    )
}

export default App;



