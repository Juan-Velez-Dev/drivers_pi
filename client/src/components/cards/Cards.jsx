import './cards.css';
import Card from '../card/Card';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function Cards () {
  const [data, setData] = useState([]);
  const { drivers } = useSelector(state => state.drivers);
  const { allDrivers } = useSelector(state => state.drivers);

  useEffect(() => {
    const tempData = drivers.length ? drivers : allDrivers;
    setData(tempData);
  }, [drivers, data, allDrivers]);

  return (
    <div className='cards-container'>
      { data.map(driver => <Card driver={driver} key={driver.id}/>) }
    </div>
  );
}

export default Cards;
