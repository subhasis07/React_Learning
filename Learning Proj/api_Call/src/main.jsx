import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './context/UserContext.jsx'
import {BrowserRouter} from "react-router-dom"
createRoot(document.getElementById('root')).render(



  //for Rouet-dom

  <BrowserRouter>

    <App/>
  </BrowserRouter>
  
  //for contex-API


  // <UserContext>
  //   <App/>
  // </UserContext>
)
