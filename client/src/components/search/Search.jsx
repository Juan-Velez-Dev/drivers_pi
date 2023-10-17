import { useState } from 'react';
import { useDriversActions } from '../../hooks/useDriversActions';
import './search.css';

function Search () {
  const { getByName } = useDriversActions();
  const [name, setName] = useState('');
  getByName(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        name='search'
        className='search-input'
        value={name}
        placeholder='driver name'
        onChange={handleChange}
      />
      <button onClick={getByName} className='button-30'>Search</button>
    </div>
  );
}

export default Search;
