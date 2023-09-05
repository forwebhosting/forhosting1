import React from 'react'
import styled from 'styled-components'
function Viewwers() {
  return (
    <Conatainer>
     <Wrap>
        <img src="/images/viewers-disney.png "/>
     </Wrap>
     <Wrap>
        <img src="/images/viewers-pixar.png "/>
     </Wrap>
     <Wrap>
        <img src="/images/viewers-national.png "/>
     </Wrap>
     <Wrap>
        <img src="/images/viewers-starwars.png "/>
     </Wrap>
     <Wrap>
        <img src="/images/viewers-marvel.png "/>
     </Wrap>
    </Conatainer>
  )
}

export default Viewwers


const Conatainer = styled.div`
margin-top:30px;
display:grid;
padding: 30px 0px 26px;
grid-gap:25px;
grid-template-columns: repeat(5,minmax(0,1fr));


` 

const Wrap = styled.div`
border: 3px solid rgba(249,249,249,0.1);
border-radius: 10px; 
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px !important;
cursor:pointer;
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

img {
    width:100%;
    height:100%;
    object-fit:cover;
}


&:hover {
    transform: scale(1.15);
    box-shadow:(0 0 0 71%) 0px 32px 22px -10px, rgb(0 0 0 /72%) 0px 30px 22px -10px;
    border-color: rgba(249,249,249,0.8);
}
` 
