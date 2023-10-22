import Search from '../search/Search';
import About from '../about/About';
import { NavLink } from 'react-router-dom';

import './nav.css';
import { useState } from 'react';
function Nav () {
  const [access, setAccess] = useState(true);
  return (
    <div className='nav-container'>
      <Search className='search'/>
      {access && <NavLink to='/create' className='create'>Create Driver</NavLink>}
      <About className='about'/>
    </div>
  );
}

export default Nav;
