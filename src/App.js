
import './App.css';
import React from 'react'
// import Test from './components/test'
import Form from './components/Formulario'
import {BrowserRouter, Link, Route} from 'react-router-dom'

import List from './components/Lista'


class App extends React.Component {

  render(){

    return (
      <div className="App">
        <header className="App-header">

         


        <BrowserRouter>
          <Link to="/form">Formulario</Link> 
          <Link to="/listado">Listado</Link>       
          <Route path="/form" component={Form}></Route>
          <Route path="/listado" component={List}></Route>
        </BrowserRouter>

    
 
        </header>
      </div>
    )
  }



}

export default App;
