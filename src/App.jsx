import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserStorage } from './UserContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Helper/NotFound';
import Feed from './Components/Feed/Feed';
import Login from './Components/Login/Login';
import Conta from './Components/Conta/Conta';
import ProtectedRoute from './Helper/ProtectedRoute';


function App() {

  return (
    <section className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header/>
          <main className='content'>
            <Routes>
              <Route path='/' element={<Feed/>}/>
              <Route path='/login/*' element={<Login/>}/>
              <Route path='/conta/*' element={
              <ProtectedRoute>
                <Conta/>
              </ProtectedRoute>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </main>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </section>
  )
}

export default App;
