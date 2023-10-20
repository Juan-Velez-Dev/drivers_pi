import { useAppDispatch } from './store';
import axios from 'axios';
import { getAllDrivers, filterByName, removeFilters, createDrivers, filterInOrder, filterByTeam } from '../redux/driversSlice';

export const useDriversActions = () => {
  const dispatch = useAppDispatch();
  const getDrivers = async () => {
    const { data } = await axios('/drivers');
    dispatch(getAllDrivers(data));
  };
  const getByName = async (name) => {
    dispatch(filterByName(name));
  };
  const getByOrder = (value) => {
    dispatch(filterInOrder(value));
  };
  const getByTeams = (value) => {
    dispatch(filterByTeam(value));
  };
  const resetFilters = async () => {
    dispatch(removeFilters());
  }; // en construcción
  const createDriver = async (data) => {
    const response = await axios.post('/driver', data);
    if (!response) return alert('not');
    else dispatch(createDrivers(response));
  };

  return {
    resetFilters,
    getDrivers,
    getByName,
    createDriver,
    getByOrder,
    getByTeams
  };
};
