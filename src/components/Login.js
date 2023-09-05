import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
           <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <Signup>GET ALL THERE</Signup>
            <Description>Disney+ Hotstar is an Indian subscription video on-demand over-the-top streaming service owned by Novi Digital Entertainment of Disney Star and operated by Disney Entertainment, both divisions</Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
           </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
overflow-y: hidden;
  max-width: 100vw;
  min-height: 93vh;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
    background: url("/images/login-background.jpg") center/cover no-repeat fixed;

    z-index: -1;
  }
`

const CTA = styled.div`  max-width: 650px;
padding: 80px 40px;
width: 80%;
display: flex;
flex-direction:column;

`
const CTALogoOne = styled.img`



`
const CTALogoTwo = styled.img`



`

const Signup = styled.button`
width: 100%;
color: #f9f9f9;
border-radius: 10px;
border: none;
background-color:#0063e5;
font-weight:bold;
padding : 17px 0px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin: 8px 0px 12px;
&:hover{
  background: #0483ee;
}

`

const Description = styled.p`
color: white;
font-size:11px;
text-align: center;
line-height: 1.5;
letter-spacing: 1.5px;
`