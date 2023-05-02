import React from "react";
import { NavLink } from "react-dom-router";

function NavBar() {
    return (
        <div>
            <NavLink to="/posts">
                Home
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/postLink">
                PostLink
            </NavLink>
            <NavLink to="/submitpost">
                Submit a Post
            </NavLink>
        </div>
    )
}

export default NavBar;