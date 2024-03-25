import React from 'react'
import './App.css'
import Docs from './components/Docs'
import { Routes, Route } from "react-router-dom";
import EditDocs from './components/EditDocs';
import { app, database } from './components/FirebaseConfig';

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Docs database={database} />} />
    <Route path="/editDocs/:id" element={<EditDocs database={database}/>} />
  </Routes>
  )
}

export default App