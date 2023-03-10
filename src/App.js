import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import full from "./images/full.jpg"; //<img src={ full } width="100%" /> nav바 아래에 넣으면 되는데 레이아웃이 깨짐
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LoginForm from './pages/LoginForm';
//import LogoutButton from './pages/LogoutButton';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import NavBar from './pages/NavBar';
import SideBar from './pages/SideBar';
import Quals from './pages/Quals';
import Questions from './pages/Questions';
import Voc from './pages/Voc';
import VocView from './pages/VocView';
import Reviews from './pages/Reviews';
import VocQuestion from './pages/VocQuestion';

function App() {
  // 로그인 상태 관리
  const [userId, setUserId] = useState(null);
 
  const [isLogin, setIsLogin] = useState(null);
  
  useEffect(() => {
    if(sessionStorage.getItem({userId}) === null){
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log('isLogin ?? :: ', isLogin)
    } else {
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
    // 로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
    }
  }, [userId, isLogin]);

  const logout = () => setIsLogin(false);

  return (
    <>
    <Router>
      <header>
        <NavBar />
        <img src={ full } width="100%"/>
      </header>                               
      <hr />
        <aside >
          <SideBar/> 
        </aside>
        <main >
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route
              path="/login"
              element = {<LoginForm isLogin={isLogin} />
              }
            />
            <Route
              path="/profile"
              element={<Profile isLogin= {isLogin} userId={userId}/>}
            />
            <Route path="/signin" element={<SignIn/>} />
            <Route element={NotFound} />
            <Route path="/quals" element={<Quals/>} />
            <Route path="/questions" element={<Questions/>} />
            <Route path="/reviews" element={<Reviews/>} />
            <Route path='/voc' element={<Voc />} />  
            <Route path='/voc/:vocId' element={<VocView />}  />
            <Route path='/voc/question' element={<VocQuestion />}  />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
