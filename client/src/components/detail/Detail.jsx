import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import imgDefault from '../../assets/defimg.jpg';
import axios from 'axios';

function Detail () {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);
  useEffect(() => {
    axios(`/drivers/${Number(id)}`)
      .then(data => setDriver(data.data));
  }, [id]);
  console.log(driver);
  return (
    <div>
      <h1>Detail</h1>
      <h2>{driver?.name.forename}</h2>
      <p>{driver?.name.surname}</p>
      <p>{driver?.nationality}</p>
      <img src={driver?.image.url.length ? driver.image.url : imgDefault} alt={driver?.name.forename} />
      <p>{driver?.description}</p>
      <p>{driver?.dob}</p>
      <p>{driver?.teams}</p>
    </div>
  );
}

export default Detail;
