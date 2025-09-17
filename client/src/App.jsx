import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage"
import axios from 'axios'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/DashboardPage'

function App() {
  
// base URl for all axios request
axios.defaults.baseURL = 'http://localhost:3000';

  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
