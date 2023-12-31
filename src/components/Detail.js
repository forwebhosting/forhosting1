import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../firebaseConfig';
import { useState } from 'react';

function Detail() {

  const {id } = useParams();
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovies(doc.data());
        }
      });
  }, [id]);

  console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
  }
  const subTitile =      movie.subTitle
  const description =  movie.description 
  const backgroundImgae = movie.backgroundImg
  const imageTitle =     movie.titleImg


  
   return (
    <Container>
      <Background >
        <img src={backgroundImgae} alt="" />    </Background>
      <ImageTitile >
        <img src={imageTitle} alt=""/>
      </ImageTitile>
      <Controls>
        <Playbutton>
           <img src="/images/play-icon-black.png" alt=""/>
           <span>PLAY</span>
        </Playbutton>
        <TrainlerButton>
        <img src="/images/play-icon-white.png" alt="" />
           <span>Trailer</span>
        </TrainlerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>

      </Controls>
      <SubTitile>{subTitile}</SubTitile>

      <Description>{description}</Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
min-height: 90vh;
padding : 0 calc(3.5vw + 5px);
position: relative;


`


const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index:-1;
opacity: 0.8;



img {
    width:100%;
    height:100%;
    object-fit:cover;
}
`

const ImageTitile = styled.div`
margin-top: 20px;

 height: 30vh;
 min-height: 170px;
 width: 35vw;
 min-width:200px;

 img {
    width:100%;
    height:100%;
    object-fit:contain;
}


`

const Controls = styled.div`
margin: 20px 0px;
display: flex;
align-items: center;


`
const Playbutton = styled.button`
border-radius:4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;

height: 56px;
background-color: rgb(249,249,249);
border: none;
letter-spacing: 1.8px;
cursor: pointer;


&:hover {
  background: rgb(198,198,198);
  transform: scale(1.015);
}


` 
const TrainlerButton = styled.button`
border-radius:4px;
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
text-transform: uppercase;
border-radius:4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
cursor: pointer;
height: 56px;
border: none;
letter-spacing: 1.8px;
&:hover {
  background: rgb(0,0,0,0.5);
  transform: scale(1.015);
}
` 

const AddButton = styled.button`
width: 44px;
height: 44px;
display: flex;
align-items : center;
justify-content: center;
border-radius:50%;
border: 2px solid white;
margin:10px;
background-color: rgba(0,0,0,0.6);
cursor: pointer;
span {
   font-size: 30px;
   color: white;
}
&:hover {
  background: rgb(0,0,0,0.5);
  transform: scale(1.015);
}

`
const GroupWatchButton = styled(AddButton)`

 background-color: rgb(0,0,0);

`

const Description = styled.p`
  color: white;
`

const SubTitile = styled.p`
  color: white;
  line-height: 1.4;
  font-size: 20px;
  margin-top:16px;
`