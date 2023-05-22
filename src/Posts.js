import React from "react";
import styled from "styled-components";


function Posts({post}) {

    return(
        <PostStyle className="body">
            <h2>Webcomics for Birds</h2>
            <div>{post}</div>
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