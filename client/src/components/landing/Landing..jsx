import driversLogo from '../../assets/g1logopng.png';
import { useNavigate } from 'react-router-dom';

import './landing.css';

import Loading from '../loading/Loading';
import { useState } from 'react';

function Landing () {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 500);
  };
  if (loading) {
    return (
      <Loading/>
    );
  }
  return (
    <div className='landing-container'>
      <img className='logo-f1' src={driversLogo}alt="" />
      <button className={'button-29'} onClick={() => handleLoading()}>START</button>
    </div>
  );
};

export default Landing;
