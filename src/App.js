import React from 'react';
import './App.css';
import Header from './components/Header';
import ReactState from './components/ReactState';
import StudentsList from './components/StudentsList';

function App() {
  return (
    <>
      <Header />
      <ReactState />
      <StudentsList />
    </>
  )
}
export default App;
