
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Loginpage } from './pages/Login'
import { Dashboard } from './pages/dashboard'
import { Joinnow } from './pages/joinnow'
import { Dashafter } from './pages/dashafter'
import { SignupForm } from './pages/SignUp'

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/todos/1' element={<Loginpage/>}/>
        <Route path='/dashafter' element={<Dashafter/>}/>
        <Route path='/joinnow' element={<Joinnow/>}/>
        <Route path='/SignUp' element={<SignupForm/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
