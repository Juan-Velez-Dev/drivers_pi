import { useParams, NavLink } from 'react-router-dom';

import { useEffect, useState } from 'react';

import axios from 'axios';

function Detail () {
  const { id } = useParams();
  const [driver, setDriver] = useState();
  useEffect(() => {
    axios(`/driver/${Number(id)}`)
      .then(data => setDriver(data.data))
      .catch(alert('not found'));
  }, []);
  return (
    <div>

      <h2>{driver?.name.forename}</h2>
      <p>{driver?.name.surname}</p>
      <p>{driver?.nationality}</p>
      <img src={driver?.image.url} alt={driver?.name.forename} />
      <p>{driver?.description}</p>
      <p>{driver?.dob}</p>
      <p>{driver?.teams}</p>
    </div>
  );
}

export default Detail;
