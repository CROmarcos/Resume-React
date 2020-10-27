import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Homepage from './Pages/Homepage';
import Personal from './Pages/Personal';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Route exact path="/" component={Homepage}/>
      <Route path="/personal" component={Personal}/>
      <Route path="/education" component={Education}/>
      <Route path="/experience" component={Experience}/>
    </>
  );
}

export default App;
