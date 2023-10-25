import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navcomponent} from './Navcomponent';
import {BrowserRouter} from "react-router-dom"
//challenge 11
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navcomponent />
    </BrowserRouter>
);

