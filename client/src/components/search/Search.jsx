import { useDriversActions } from '../../hooks/useDriversActions';
import './search.css';

function Search () {
  const { getByName } = useDriversActions();

  const handleChange = (event) => {
    const { value } = event.target;
    getByName(value);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        name='search'
        className='search-input'
        placeholder='search driver by name!'
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
