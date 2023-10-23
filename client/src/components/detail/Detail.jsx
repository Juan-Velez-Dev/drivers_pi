import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './detail.css';

function Detail () {
  const { id } = useParams();
  const [driver, setDriver] = useState();
  useEffect(() => {
    axios(`/driver/${Number(id)}`)
      .then(data => setDriver(data.data))
      .catch(error => alert(error.message));
  }, []);
  return (
    <div className='detail-container'>
      <div className='detail-content'>
        <div className='detail-img-container'>
          <img className='detail-img' src={driver?.image.url} alt={driver?.name.forename} />
        </div>
        <div className='detail-info-container'>
          <p className='detail-surname'><span>Surname:</span> {driver?.name.surname}</p>
          <p className='detail-forename'><span>Forename:</span> {driver?.name.forename}</p>
          <p className='detail-nationality'><span>Nationality:</span> {driver?.nationality}</p>
          <p className='detail-dob'><span>Birthday:</span> {driver?.dob}</p>
          <p className='detail-teams'><span>Teams:</span> {driver?.teams}</p>
        </div>
      </div>
      <p className='detail-description'>{driver?.description}</p>
    </div>
  );
}

export default Detail;
