import React from 'react';
import Home from './routes/Home'
import About from './routes/About'
import { HashRouter, Route } from 'react-router-dom'
import './App.css';



function App(){
  return (
    <HashRouter>
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  )
}
export default App;
