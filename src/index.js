import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const axios = require('axios').default;
let home;
let slide2;
axios.get('https://voda-react-assessment.herokuapp.com/home')
  .then(function (response) {
    home=response.data[0]
    ReactDOM.render(<App home={home} />, document.getElementById('root'));
    console.log(home);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
