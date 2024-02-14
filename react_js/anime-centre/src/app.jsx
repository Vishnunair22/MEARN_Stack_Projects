import React from 'react'
import './index.css';
import './app.css';
import NavBar from './components/navbar/NavBar';
import MainPart from './components/main/MainPart';

const app = () => {
  return (
    <>
    <header>
      <NavBar/>
    </header>
    <main>
      <MainPart/>
    </main>
    </>
  )
}

export default app