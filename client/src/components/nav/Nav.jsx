import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/F1.png';
import Search from '../search/Search';
import './nav.css';

function Nav () {
  const [access, setAccess] = useState(true);
  return (
    <div className='nav-container'>
      <div className='logo-content'>
        <img src={logo} className='nav-logo'/>
        <h3 className='title-pi'>DRIVERS</h3>
      </div>
      <div className='nav-content'>
        <Search className='search'/>
        {access && <NavLink to='/create' className='create'>Create Driver</NavLink>}
      </div>
    </div>
  );
}

export default Nav;
