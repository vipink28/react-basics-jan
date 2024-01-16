import React from 'react';
import './App.css';
import Header from './components/Header';
import ReactState from './components/ReactState';
import StudentsList from './components/StudentsList';
import ReactProps from './components/ReactProps';

function App() {
  return (
    <>
      <ReactProps />
      <Header />
      <ReactState />
      <StudentsList />
    </>
  )
}
export default App;
