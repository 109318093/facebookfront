// import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderArea from './HeaderArea/HeaderArea';
import LoginPage from './LoginPage/LoginPage';
function App() {
  return(
    <div className="App">
      {/* BrowserRouter後面加basename是能夠讓url都在basename以後 */}
      <BrowserRouter basename="/app">
        {/* 所有Route都必須包在Routes裡面 */}
        <Routes>
            {/* path就是你的要去的路由element就是你要傳入的頁面第一個路由就是首頁會顯示的第一個頁面 */}
            <Route path='/LoginPage' element={<LoginPage />}/>
            <Route path='/HeaderArea' element={<HeaderArea />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
