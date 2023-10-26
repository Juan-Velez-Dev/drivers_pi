import { useEffect, useState } from 'react';
import { useDriversActions } from '../../hooks/useDriversActions';
import { useSelector } from 'react-redux';

import './pagination.css';

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
    <div className='pagination-container'>
      <button disabled={buttonDisabel} className={`btn ${currentPage === 1 ? 'is-disable' : ''}`} onClick={prevHandler}>Prev</button>
      <div className='pagination-buttons'>
        {currentPage !== 1 && <button onClick={() => specificPage(1)}>1...</button> }
        {pageNumbers?.slice(currentPage - 1, currentPage + 5).map(noPage => (
          <button
            className={noPage === currentPage ? 'isCurrent' : ''}
            key={noPage}
            onClick={() => specificPage(noPage)}>{noPage}</button>
        ))}
        {currentPage !== 57 && <button onClick={() => specificPage(57)}>...57</button> }
      </div>
      <button className={`btn-next ${currentPage >= pageNumbers.length ? 'is-disable' : ''}`} onClick={nextHandler}>Next</button>
    </div>
  );
};
