import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '../pagination/Pagination';
import Filter from '../filter/Filter';
import Card from '../card/Card';
import './cards.css';

function Cards () {
  const [data, setData] = useState([]);
  const { driversPerPage } = useSelector(state => state.drivers);
  const { currentPage } = useSelector(state => state.drivers);
  const { filterDrivers } = useSelector(state => state.drivers);
  const { filterDriverTeams } = useSelector(state => state.drivers);
  const lastIndex = currentPage * driversPerPage;
  const firstIndex = lastIndex - driversPerPage;

  useEffect(() => {
    if (filterDriverTeams.length) setData(filterDriverTeams);
    else if (filterDrivers.length) setData(filterDrivers);
  }, [data, filterDrivers, filterDriverTeams]);

  return (
    <div className='cards-container'>
      <Filter/>
      <Pagination data={data} setData={setData} />
      <div className='cards-content'>
        { data.map((driver, i) => <Card driver={driver} key={i}/>).slice(firstIndex, lastIndex) }
      </div>
    </div>
  );
}

export default Cards;
