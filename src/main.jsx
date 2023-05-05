import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from './Context/darkModeContext';
import { CurrentUserProvider } from './Context/author';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CurrentUserProvider>
    <DarkModeContextProvider>
            <App />
    </DarkModeContextProvider>
        </CurrentUserProvider>
    </BrowserRouter>
)
