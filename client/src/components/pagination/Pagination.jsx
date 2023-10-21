import { useEffect, useState } from 'react';
import { useDriversActions } from '../../hooks/useDriversActions';
import { useSelector } from 'react-redux';

export const Pagination = ({ data }) => {
  const { prevHandler, nextHandler, specificPage } = useDriversActions();
  const [buttonDisabel, setButtonDisabel] = useState(false);
  const { currentPage } = useSelector(state => state.drivers);
  const { driversPerPage } = useSelector(state => state.drivers);
  const totalDrivers = data.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDrivers / driversPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        <button disabled={buttonDisabel} className={`btn ${currentPage === 1 ? 'is-disable' : ''}`} onClick={prevHandler}>Prev</button>
        <div>
          {pageNumbers?.map(noPage => (
            <button className={noPage === currentPage ? 'isCurrent' : ''} key={noPage} onClick={() => specificPage(noPage)}> {noPage}</button>
          ))}
        </div>
        <button className={`btn ${currentPage >= pageNumbers.length ? 'is-disable' : ''}`} onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
};
