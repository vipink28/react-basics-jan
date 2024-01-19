import React from 'react';
import './App.css';
import Header from './components/Header';
import ReactState from './components/ReactState';
import StudentsList from './components/StudentsList';
import ReactProps from './components/ReactProps';
import Form from './components/Form';
import StaffList from './components/StaffList';

function App() {
  return (
    <>
      <StaffList />
      {/* <Form />
      <ReactProps />
      <Header />
      <ReactState />
      <StudentsList /> */}
    </>
  )
}
export default App;
