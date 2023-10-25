import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainApp} from './MainApp';
import {BrowserRouter} from "react-router-dom"
//challenge 11
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>
);

