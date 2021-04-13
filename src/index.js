import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Badge from './components/Badge'

//ReactDOM.render(
 // <React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //document.getElementById('app')
//);



const element=(
    <div>
        <h1>Hola Soy Camilo</h1>
        <p>Soy estudiante</p>
    </div>
);

const container= document.getElementById('app');

ReactDOM.render(<Badge firstname="Camilo" lastname="piñuela" jobtitle="auxiliar"/>,container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
