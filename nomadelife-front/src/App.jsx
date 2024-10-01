import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost/CreatePost'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard.jsx'

import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication";
import { useEffect, useState } from "react";
import { AuthProvider } from "./context/AuthContext.jsx";

const App = () => {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

 
    return (
      <div className='App'>
      <AuthProvider value={user}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={ <Register/> } />
              <Route path="/posts/create" element={<CreatePost/> } />
              <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
        </div>
    )
  }


export default App