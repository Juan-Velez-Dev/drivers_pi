import { useAppDispatch } from './store';
import axios from 'axios';
import { getAllDrivers, getDriversByName } from '../redux/driversSlice';

export const useDriversActions = () => {
  const dispatch = useAppDispatch();
  const getDrivers = async () => {
    const { data } = await axios('/drivers');
    dispatch(getAllDrivers(data));
  };
  const getByName = async (name) => {
    const { data } = await axios(`/driver/?name=${name.toLocaleLowerCase()}`);
    if (data) dispatch(getDriversByName(data));
  };
  const removeDriver = async (id) => { }; // en construcción

  return { removeDriver, getDrivers, getByName };
};
