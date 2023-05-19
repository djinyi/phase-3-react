import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import NewWebcomic from "./NewWebcomic";
import Creators from "./Creators";
import NewCreators from "./NewCreators";
import NavBar from "./NavBar"


function App() {
    return (
      <div>
      <NavBar />
      <Switch>
          <Route exact path="/">
          <Posts />
          </Route>
          <Route exact path="/submitcomics">
          <NewWebcomic />
          </Route>
          <Route exact path="/creators">
          <Creators/>
          </Route>
          <Route exact path="/submitcreator">
          <NewCreators/>
          </Route>
      </Switch>
  </div>
    )
}

export default App;


