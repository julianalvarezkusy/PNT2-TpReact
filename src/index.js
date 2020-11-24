import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import store from './store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';



import {addEvento, removeEvento} from './store/actions'

window.mi_store = store
window.mi_accion = addEvento
window.removeEvento = removeEvento

ReactDOM.render(

  //Todo lo que está dentro del tag Provider tiene acceso al Store // Inyecto mi Store en Reacto con Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
