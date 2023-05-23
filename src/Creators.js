import React from "react";
import styled from "styled-components";

function Creators({list}){

    return(
        <CreatorDetail>
        <h3>List of creators:</h3>
        <div>{list}</div>
        </CreatorDetail>
    )
}

export default Creators;

const CreatorDetail = styled.div`
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif
h3{
    font-size: 30px;
    text-align: center;
    padding: 25px 45px 25px 45px;
    background-color: rgba(135, 206, 235, .2);
}
`