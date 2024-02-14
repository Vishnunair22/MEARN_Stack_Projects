import React from 'react'
import './index.css';
import './app.css';
import NavBar from './components/navbar/NavBar';
import MainPart from './components/main/MainPart';
import PlanPart from './components/plan/PlanPart';

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
    </>
  )
}

export default app