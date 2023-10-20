import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDriversActions } from '../../hooks/useDriversActions';
import Validation from './validation';

function Create () {
  const { allDrivers } = useSelector(state => state.drivers);
  const { teams } = useSelector(state => state.teams);
  const { createDriver } = useDriversActions();
  const nationality = [...new Set(allDrivers?.map(driver => driver.nationality))];
  const [errors, setErrors] = useState({});
  const [messageErrors, setMessageErrors] = useState(false);
  const [driverData, setDriverData] = useState({
    surname: '',
    forename: '',
    description: '',
    image: '',
    nationality: '',
    birthdate: '',
    teams: []
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === 'teams') {
      if (driverData.teams.includes(value)) {
        setDriverData({
          ...driverData,
          [name]: driverData.teams.filter(teams => teams !== value)
        });
      } else {
        setDriverData({
          ...driverData,
          [name]: [...driverData.teams, value]
        });
      }
    } else if (name === 'nationality') {
      setDriverData({
        ...driverData,
        [name]: value
      });
    } else {
      setDriverData({
        ...driverData,
        [name]: value
      });
    }

    setErrors(Validation({
      ...driverData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Validation(driverData)) {
      createDriver(driverData);
    } else {
      setMessageErrors(true);
    }
  };

  return (
    <div>
      <h1>Create Driver</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="surname">Surname</label>
        <input
          type='text'
          name='surname'
          onChange={handleOnChange}
          placeholder='Enter name here'
        />
        <p>{messageErrors && errors.surname}</p>

        <label htmlFor="forename">Forename</label>
        <input
          type='text'
          name='forename'
          onChange={handleOnChange}
          placeholder='Enter lastname here'
        />
        <p>{messageErrors && errors.forename}</p>

        <label htmlFor="nationality">Nationality</label>
        <select name='nationality' onChange={handleOnChange}>
          {nationality?.map((e, i) => <option value={e} key={i}>{e}</option>)}
        </select>
        <p>{messageErrors && errors.nationality}</p>

        <label htmlFor="image">URL Imagen</label>
        <input
          type='text'
          name='image'
          onChange={handleOnChange}
          placeholder='URL image'
        />
        <p>{messageErrors && errors.image}</p>

        <label htmlFor="birthdate">Birthdate</label>
        <input
          type='date'
          name='birthdate'
          onChange={handleOnChange}
          placeholder='Enter birthday here'
        />

        <label htmlFor="teams">Teams</label>
        <select name="teams" id="" onChange={handleOnChange}>
          {teams?.map((team, i) => <option value={team} key={i}>{team}</option>)}
        </select>
        <p>{messageErrors && errors.teams}</p>

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="3"
          placeholder='Enter description here'
          onChange={handleOnChange}
        ></textarea>q
        <button>Create</button>
      </form>
    </div>
  );
}

export default Create;
