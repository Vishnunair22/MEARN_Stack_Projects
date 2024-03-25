import React from 'react'
import './App.css'
import Docs from './components/Docs'
import { app, database } from './components/FirebaseConfig';

const App = () => {
  return (
    <div>
      <Docs database={database}/>
    </div>
  )
}

export default App