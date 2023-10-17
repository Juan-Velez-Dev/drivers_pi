//* HOOKS
import { useLocation, Routes, Route } from 'react-router-dom';
//* COMPONENTS
import Landing from './components/landing/Landing.';
import Detail from './components/detail/Detail';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import './App.css';
import { useEffect } from 'react';
import { useDriversActions } from './hooks/useDriversActions';
import Create from './components/create/Create';

function App () {
  //* HOOKS INVOCATION
  const location = useLocation();
  const { getDrivers } = useDriversActions();
  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <div className='app-container'>
      {location.pathname !== '/' && location.pathname !== '*' && (
        <Nav/>
      )}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
