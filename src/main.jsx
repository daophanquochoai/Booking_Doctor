import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import AppContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <AppContextProvider>
          <App />
      </AppContextProvider>
  </BrowserRouter>,
)
