import React from 'react'
import './index.css';
import './app.css';
import NavBar from './components/navbar/NavBar';
import MainPart from './components/main/MainPart';
import PlanPart from './components/plan/PlanPart';
import FooterPart from './components/footer/FooterPart';

const app = () => {
  return (
    <>
    <header>
      <NavBar/>
    </header>
    <main>
      <MainPart/>
      <PlanPart/>
    </main>
    <footer>
      <FooterPart/>
      <p>&copy;Copyright 2024 Anime Hub,All Rights &reg; Reserved.</p>
    </footer>
    </>
  )
}

export default app