import { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import { useSelector } from 'react-redux';

function Pagination () {
  const { filterDrivers } = useSelector(state => state.drivers);

  // const [currentPage, setCurrentPage] = useState(0);
  // const [drivers, setDrivers] = useState([]);

  // if (filterDrivers.length) {
  //   const firstIndex = currentPage * driversPerPage;
  //   setDrivers([...filterDrivers].slice(firstIndex, firstIndex + driversPerPage));
  // }

  return (
    <div>

    </div>
  );
}

export default Pagination;
