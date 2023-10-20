import { useSelector } from 'react-redux';

import { useDriversActions } from '../../hooks/useDriversActions';

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
    <div>
      <h1>filter</h1>
      <select onChange={handleOrder} >
        <option>Order</option>
        <option value="A">asc</option>
        <option value="B">des</option>
      </select>
      <select onChange={handleFilter} >
        <option>Teams</option>
        {teams.map((team, i) => <option key={i} value={team}>{team}</option>)}
      </select>
      <button onClick={handleReset}>reset filter</button>
    </div>
  );
}

export default Filter;
