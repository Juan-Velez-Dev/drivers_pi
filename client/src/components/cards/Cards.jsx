import './cards.css';
import Card from '../card/Card';
import Filter from '../filter/Filter';
import Pagination from '../pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function Cards () {
  const [data, setData] = useState([]);
  const { filterDrivers } = useSelector(state => state.drivers); // if filterDrivers.length > 0 ? filterDrivers.map(driver=> {Card props={props}}) : data.map(driver=> {Card props={props}}
  const { filterDriverTeams } = useSelector(state => state.drivers); // if filterDrivers.length > 0 ? filterDrivers.map(driver=> {Card props={props}}) : data.map(driver=> {Card props={props}}
  useEffect(() => {
    if (filterDriverTeams.length) setData(filterDriverTeams);
    else if (filterDrivers.length) setData(filterDrivers);
  }, [data, filterDrivers, filterDriverTeams]);

  return (
    <div className='cards-container'>
      <Filter/>
      { data.map(driver => <Card driver={driver} key={driver.id}/>) }
      <Pagination/>
    </div>
  );
}

export default Cards;
