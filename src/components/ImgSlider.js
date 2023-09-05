import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css" 
import styled from 'styled-components';
import Slider from 'react-slick';


function ImgSlider() {

    let settings = {
        dots : true,
        infinite : true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }


  return (
    <Conatainer>
    <Carousel {...settings}>
     <Wrap >
        <img src="/images/slider-badging.jpg" />
     </Wrap>
     <Wrap >
        <img src="/images/slider-badag.jpg" />
     </Wrap>
     <Wrap >
        <img src="/images/slider-scale.jpg" />
     </Wrap>
     <Wrap >
        <img src="/images/slider-scales.jpg" />
     </Wrap>
    </Carousel>
    </Conatainer>
  )
}

export default ImgSlider

const Conatainer = styled.div`
width:100%;
/* overflow-x:none ; */

`
const Carousel = styled(Slider)`
padding-top: 20px;
ul li button{
    &:before{
        font-size:10px;
        color: rbg(150,158,171);
    }
}
li.slick-active button::before {
    color: white;
}
.slick-list{
    overflow: visible;
}

button {
    z-index:1;
}
   

`

const Wrap = styled.div`

img{
  
    border : 1px solid transparent;
    border-radius:10px;
    width:100%;
    height:100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px !important;
    cursor:pointer;
    &:hover{
        border: 1px solid rgba(249,249,249,0.8);
    }
  
}
`