import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import Home from './pages/home';
import './index.css';

ReactDOM.render(
    <>
        <CssBaseline />
        <Home />
    </>,
    document.getElementById('root')
);
