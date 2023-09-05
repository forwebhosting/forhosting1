import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import styled from 'styled-components';
import Detail from './components/Detail';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserName } from './features/user/userSlice';

function App() {
  const userName = useSelector(selectUserName);

  return (
    <Container>
      <Header />
      <Router>
        <Routes>
          {!userName ? (
            <Route path='/' element={<Login />} />
          ) : (
            <>
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/' element={<Home />} />
            </>
          )}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  /* Add your styles here */
  overflow-y: hidden;
`;
