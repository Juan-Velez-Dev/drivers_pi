import { useDriversActions } from '../../hooks/useDriversActions';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from './validation';
import './create.css';

function Create () {
  const navigate = useNavigate();
  const { allDrivers } = useSelector(state => state.drivers);
  const { teams } = useSelector(state => state.teams);
  const { createDriver } = useDriversActions();
  const nationality = [...new Set(allDrivers?.map(driver => driver.nationality))];
  const [errors, setErrors] = useState({ error: true });
  const [button, setButton] = useState(true);
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

    if (Object.keys(errors).length !== 0) {
      setMessageErrors(false);
      setButton(true);
    } else {
      setButton(false);
    }

    if (errors !== null) setMessageErrors(true);

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
    createDriver(driverData);
    alert('Created completed');
    navigate('/home');
  };

  return (
    <div className='create-container'>
      <h2 className='create-title'>Create your Driver</h2>
      <form className='create-form' onSubmit={handleSubmit}>
        <label htmlFor="surname">Surname</label>
        <input
          type='text'
          name='surname'
          onChange={handleOnChange}
          placeholder='Enter name here'
        />
        <p className='error-message'>{messageErrors && errors.surname}</p>

        <label htmlFor="forename">Forename</label>
        <input
          type='text'
          name='forename'
          onChange={handleOnChange}
          placeholder='Enter lastname here'
        />
        <p className='error-message'>{messageErrors && errors.forename}</p>

        <label htmlFor="nationality">Nationality</label>
        <select name='nationality' onChange={handleOnChange}>
          {nationality?.map((e, i) => <option value={e} key={i}>{e}</option>)}
        </select>
        <p className='error-message'>{messageErrors && errors.nationality}</p>

        <label htmlFor="image">URL Imagen</label>
        <input
          type='text'
          name='image'
          onChange={handleOnChange}
          placeholder='URL image'
        />
        <p className='error-message'>{messageErrors && errors.image}</p>

        <label htmlFor="birthdate">Birthdate</label>
        <input
          type='date'
          name='birthdate'
          onChange={handleOnChange}
          placeholder='Enter birthday here'
        />
        <p className='error-message'>{messageErrors && errors.birthdate}</p>

        <label htmlFor="teams">Teams</label>
        <select name="teams" id="" onChange={handleOnChange}>
          {teams?.map((team, i) => <option value={team} key={i}>{team}</option>)}
        </select>
        <p className='error-message'>{messageErrors && errors.teams}</p>
        <p className=''>{`${driverData.teams.join('   |   ')} `}</p>

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="3"
          placeholder='Enter description here'
          onChange={handleOnChange}
        ></textarea>
        <p className='error-message'>{messageErrors && errors.description}</p>

        <button type='submit' className={button === true ? 'is-disable' : 'active'}>Create</button>
      </form>
    </div>
  );
}

export default Create;
