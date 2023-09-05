import React , { useState,useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewwers from './Viewwers'
import Movies from './Movies'
import { db } from "../firebaseConfig";
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movies/movieSlice'

function Home() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    // This code will run once when the component loads
    db.collection("movies").onSnapshot((snapshot) => {
      let movies = snapshot.docs.map((doc) => {
       
        return {id: doc.id, ...doc.data()} // <-- added this line to return the mapped data
      });
      dispatch(setMovies(movies)) // <-- added this line to set the state with the mapped data
    });
  }, []);

  return (
    <Container>


      <ImgSlider />
      <Viewwers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
overflow-x: hidden;
overflow-y: hidden;
  max-width: 100vw;
  min-height: 93vh;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  background: url("/images/home-background.png") center/cover no-repeat fixed;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/images/home-background.png") center/cover no-repeat fixed;
    z-index: -1;
  }

`
