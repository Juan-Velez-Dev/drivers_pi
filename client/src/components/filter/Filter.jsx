import { useDriversActions } from '../../hooks/useDriversActions';
import { useSelector } from 'react-redux';
import './filter.css';

function Filter () {
  const { getByOrder, getByTeams, resetFilters } = useDriversActions();
  const { teams } = useSelector(state => state.teams);

  const handleOrder = (event) => {
    getByOrder(event.target.value);
  };
  const handleFilter = (event) => {
    getByTeams(event.target.value);
  };
  const handleReset = () => {
    resetFilters();
  };

  return (
    <div className='filter-container'>
      <select className='select-order' onChange={handleOrder} >
        <option>Order</option>
        <option value="A">asc</option>
        <option value="B">des</option>
      </select>
      <select className='select-teams' onChange={handleFilter} >
        <option>Teams</option>
        {teams.map((team, i) => <option key={i} value={team}>{team}</option>)}
      </select>
      <button className='filter-button' onClick={handleReset}>reset filter</button>
    </div>
  );
}

export default Filter;
