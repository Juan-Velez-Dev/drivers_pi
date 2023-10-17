import { useState } from 'react';
import { useSelector } from 'react-redux';

function Create () {
  const { allDrivers } = useSelector(state => state.drivers);
  const nationality = [...new Set(allDrivers.map(driver => driver.nationality))];
  const [selectedOptions, setSelectionOptions] = useState('');
  const handleOptionChange = (event) => {
    setSelectionOptions(event.target.value);
  };

  return (
    <div>
      <h1>Create Driver</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type='text'
          name='name'
          placeholder='Enter name here'
        />
        <label htmlFor="lastname">Last name</label>
        <input
          type='text'
          name='lastname'
          placeholder='Enter lastname here'
        />
        <label htmlFor="nationality">Nationality</label>
        <select value={selectedOptions} onChange={handleOptionChange}>
          {nationality.map((e, i) => <option value={e} key={i}>{e}</option>)}
        </select>
        <input
          type='text'
          name='nationality'
          placeholder='Enter nationality here'
        />
        <label htmlFor="nationality">Imagen</label>
        <input
          type='file'
          accept='image/*'
          placeholder='upload image'
        />
        <label htmlFor="nationality">Nationality</label>
        <input
          type='text'
          name='nationality'
          placeholder='Enter nationality here'
        />
      </form>
    </div>
  );
}

export default Create;
