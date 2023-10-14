//* HOOKS
import { useLocation, Routes, Route } from 'react-router-dom'
//* COMPONENTS
import Landing from './components/landing/Landing.'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import './App.css'

function App () {
  //* HOOKS INVOCATION
  const location = useLocation()
  return (
    <div className='app-container'>
      {location.pathname !== '/' && location.pathname !== '*' && (
        <Nav/>
      )}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
