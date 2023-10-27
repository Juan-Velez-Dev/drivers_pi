import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './detail.css';
import Loading from '../loading/Loading';

function Detail () {
  const { filterDrivers } = useSelector(state => state.drivers);
  const { id } = useParams();
  const [driver, setDriver] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (id.includes('-')) {
      const filter = filterDrivers.filter(driver => driver.id === id);
      setDriver(filter);
    } else {
      const filter = filterDrivers.filter(driver => driver.id === Number(id));
      setDriver(filter);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='detail-container'>
      <div className='detail-content'>
        <div className='detail-img-container'>
          <img className='detail-img' src={driver[0]?.image} alt={driver[0]?.forename} />
        </div>
        <div className='detail-info-container'>
          <p className='detail-surname'><span>Surname:</span> {driver[0]?.surname}</p>
          <p className='detail-forename'><span>Forename:</span> {driver[0]?.forename}</p>
          <p className='detail-nationality'><span>Nationality:</span> {driver[0]?.nationality}</p>
          <p className='detail-dob'><span>Birthday:</span> {driver[0]?.dob}</p>
          <p className='detail-teams'><span>Teams:</span> {driver[0]?.teams[0]}</p>
        </div>
      </div>
      <p className='detail-description'>{driver[0]?.description}</p>
    </div>
  );
}

export default Detail;
