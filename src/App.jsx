import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Helper/NotFound';
import Perfil from './Components/Conta/Perfil/Perfil';
import Feed from './Components/Feed/Feed';
import Login from './Components/Login/Login';
import Conta from './Components/Conta/Conta';
import ProtectedRoute from './Helper/ProtectedRoute';
import PhotoPage from './Components/Feed/PhotoPage/PhotoPage';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/reducers/login';


function App() {

  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <section className='App'>
      <BrowserRouter>
        <Header/>
        <main className='content'>
          <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/login/*' element={<Login/>}/>
            <Route path='/foto/:id' element={<PhotoPage/>} />
            <Route path='/perfil/:user' element={<Perfil/>} />
            <Route path='/conta/*' element={
            <ProtectedRoute>
              <Conta/>
            </ProtectedRoute>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </section>
  )
}

export default App;
