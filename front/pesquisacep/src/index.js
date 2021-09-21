import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles';
import Home from './pages/home';

ReactDOM.render(
    <>
        <GlobalStyle />
        <Home />
    </>,
    document.getElementById('root')
);
