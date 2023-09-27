import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/fonts/fonts.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/config/store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
 