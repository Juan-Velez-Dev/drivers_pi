import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDriversActions } from '../../hooks/useDriversActions';
import Team from './Teams';

function Create () {
  const { allDrivers } = useSelector(state => state.drivers);
  const { teams } = useSelector(state => state.teams);
  const { createDriver } = useDriversActions();
  const nationality = [...new Set(allDrivers.map(driver => driver.nationality))];
  const [nationalityOptions, setNationalityOptions] = useState('');
  const [teamsDriver, setTeamsDriver] = useState([]);
  const [driverData, setDriverData] = useState({
    name: '',
    lastname: '',
    description: '',
    image: '',
    nationality: '',
    birthdate: '',
    teams: []
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setDriverData({
      ...driverData,
      [name]: value
    });
  };

  const handleCheckBoxChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setDriverData({
      ...driverData,
      [name]: value
    });
  };

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setDriverData({
      ...driverData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createDriver(driverData);
  };

  return (
    <div>
      <h1>Create Driver</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type='text'
          name='name'
          onChange={handleOnChange}
          placeholder='Enter name here'
        />
        <label htmlFor="lastname">Last name</label>
        <input
          type='text'
          name='lastname'
          onChange={handleOnChange}
          placeholder='Enter lastname here'
        />
        <label htmlFor="nationality">Nationality</label>
        <select name='nationality' value={nationalityOptions} onChange={handleOptionChange}>
          {nationality.map((e, i) => <option value={e} key={i}>{e}</option>)}
        </select>
        <label htmlFor="image">Imagen</label>
        <input
          type='text'
          name='image'
          onChange={handleOnChange}
          placeholder='URL image'
        />
        <label htmlFor="birthdate">Birthdate</label>
        <input
          type='text'
          name='birthdate'
          onChange={handleOnChange}
          placeholder='Enter birthday here'
        />

        <label htmlFor="">Teams</label>

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="3"
          placeholder='Enter description here'
          onChange={handleOnChange}
        ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
}

export default Create;
