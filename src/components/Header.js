import React, { useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebaseConfig';
import { GoogleAuthProvider } from "firebase/auth";
import { AiFillHome, AiOutlineSearch, AiOutlinePlus, AiFillStar } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { RiMovie2Line } from 'react-icons/ri';
import { selectUserPhoto, selectUserName, setUserLogin, setSignOut } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
 
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user)=> {
      if (user){
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo:user.photoURL
        }));
        
      }
    })
  }, []);

  const signIn = () => {
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    provider.setCustomParameters({
      prompt: 'select_account'
    });
  
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }));
      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {
    auth.signOut().then(()=>{
      dispatch(setSignOut());
   
    })
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer >
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <AiFillHome fill="white" size="20px" />
              <span>HOME</span>
            </a>
            <a>
              <AiOutlineSearch fill="white" size="20px" />
              <span>SEARCH</span>
            </a>
            <a>
              <AiOutlinePlus fill="white" size="20px" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <AiFillStar fill="white" size="20px" />
              <span>ORGIGINALS</span>
            </a>
            <a>
              <RiMovie2Line fill="white" size="20px" />
              <span>MOVIES</span>
            </a>
            <a>
              <MdLocalMovies fill="white" size="20px" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <a><span className='margin:10px'>{userName}</span></a> 
          <UserLogo onClick={signOut} src={userPhoto} />
        </>
      )}
    </Nav>
  );
}

export default Header;





const Nav = styled.nav `
color: white !important;
height:12vh;
background: #090b13;
display : flex;
align-items : center;
padding : 0 36px;
overflow-x: hidden;

a {
 color:white;
 display : flex;
 align-items: center;
 padding: 5px 15px;
 cursor:pointer;

 
 span{
    padding-left: 6px;
    font-size : 13px;
    letter-spacing: 1.42px;
    position:relative;
 }}

`

const Logo = styled.img `
margin: 10px;
min-width:50px;
max-width:80px;

`

const NavMenu = styled.div `
display : flex;
flex:1;
margin-left:20px;
a {
 color:white;
 display : flex;
 align-items: center;
 padding: 5px 15px;
 cursor:pointer;

 
 span{
    padding-left: 6px;
    font-size : 13px;
    letter-spacing: 1.42px;
    position:relative;

    &:after{
content :"";
height:2px;
background: white;
position: absolute;

left:0;
right:0;
bottom: -6px;
opacity:0;

transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
transform:scaleX(0);
transform-origin: left center;

 }}

 &:hover {
    span:after{
        transform:scaleX(1); 
        opacity:1;      
    }
 }
}

`

const UserLogo = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
`

const Login = styled.div`
border : 1px solid #f9f9f9;
padding : 8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgba(0,0,0,0.6);
transition: all 0.2s ease 0s;
cursor: pointer;

&:hover {
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
}

`

const LoginContainer = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
`