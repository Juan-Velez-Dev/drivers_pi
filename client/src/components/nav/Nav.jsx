import Search from '../search/Search';
import About from '../about/About';
import { NavLink } from 'react-router-dom';

import './nav.css';
function Nav () {
  return (
    <div className='nav-container'>
      <Search className='search'/>
      <NavLink to='/create' className='create'>Create Driver</NavLink>
      <About className='about'/>
    </div>
  );
}

export default Nav;
