import { NavLink } from 'react-router-dom'
import driversLogo from '../../assets/g1logopng.png'
import './landing.css'

function Landing () {
  return (
    <div className='landing-container'>
      <img className='logo-f1' src={driversLogo}alt="" />
      <NavLink to='/home' className={'button-29'}>START</NavLink>
    </div>
  )
};

export default Landing
