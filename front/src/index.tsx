import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StoreProvider } from 'easy-peasy';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import Router from './app/router';
import './assets/css/fonts.css';

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

