import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RegisterUserScreen from './features/registerUser/screen/registerScreen.jsx'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'

import LoginUserScreen from './features/LoginUser/screen/LoginUserScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/registerUser' element={<RegisterUserScreen/>} />
      <Route path='/loginUser' element={
        <LoginUserScreen/>
      }/>
      <Route path='*' element={<div>path not found</div>} />
     
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
