import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import reportWebVitals from './reportWebVitals';

import BadgeNew from './components/pages/BadgeNew';







const container= document.getElementById('app');

ReactDOM.render(<BadgeNew firstname="Camilo" lastname="Piñuela" avatar="https://www.gravatar.com/avatar?d=identicon"jobtitle="Auxiliar Desarrollo" twitter="camilo9619"/>,container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
