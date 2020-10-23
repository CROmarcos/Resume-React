import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Homepage from './Pages/Homepage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Route exact path="/" component={Homepage}/>
    </>
  );
}

export default App;
