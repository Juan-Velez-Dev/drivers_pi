import { NavLink } from 'react-router-dom'
import './landing.css'

function Landing () {
  return (
    <div>
      <NavLink to='/home' className={'nav'}>Home</NavLink>
    </div>
  )
};

export default Landing
