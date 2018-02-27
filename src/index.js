import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://j827389.myjino.ru/portfolio/wp-json';


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
