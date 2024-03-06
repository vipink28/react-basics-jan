import React, { createContext, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ReactState from './components/ReactState';
import StudentsList from './components/StudentsList';
import ReactProps from './components/ReactProps';
import Form from './components/Form';
import StaffList from './components/StaffList';
import { AppProvider } from './context/AppContext';
import Counter from './components/Counter';
import TodoMain from './components/TodoMain';
import { useLocalStorage } from './hooks/customHook';

export const MyContext = createContext();


function App() {
  const [local, setLocal] = useLocalStorage("user", "vipin");



  useEffect(() => {
    setLocal("Vipin Kumar");
  }, [])

  console.log(local);

  return (
    <>

      <TodoMain />
      {/* <AppProvider>
        <MyContext.Provider value="Hello Context">
          <Counter />
          <Header />
          <ReactState />
          <StudentsList />
        </MyContext.Provider>

        <StaffList />
      </AppProvider> */}
      {/* <Form />
      <ReactProps />
      <Header />
      <ReactState />
      <StudentsList /> */}
    </>
  )
}
export default App;
