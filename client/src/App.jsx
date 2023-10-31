import { useLocation, Routes, Route } from 'react-router-dom';
import { useDriversActions } from './hooks/useDriversActions';
import { useTeamsActions } from './hooks/useTeamsActions';
import { useEffect } from 'react';
import Landing from './components/landing/Landing.';
import Create from './components/create/Create';
import Detail from './components/detail/Detail';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import './App.css';
import { useSelector } from 'react-redux';

function App () {
  const location = useLocation();
  const { driversCreated } = useSelector(state => state.drivers);
  const { getTeams } = useTeamsActions();
  const { getDrivers } = useDriversActions();
  useEffect(() => {
    getDrivers();
    getTeams();
  }, [driversCreated]);

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
