import { useAppDispatch } from './store';
import axios from 'axios';
import { setPrevHandler, onSpecificPage, getAllDrivers, setNextHandler, filterByName, removeFilters, createDrivers, filterInOrder, filterByTeam } from '../redux/driversSlice';

export const useDriversActions = () => {
  const dispatch = useAppDispatch();
  //* get all drivers
  const getDrivers = async () => {
    const { data } = await axios('/drivers');
    dispatch(getAllDrivers(data));
  };
  //* create drivers
  const createDriver = async (data) => {
    const response = await axios.post('/driver', data);
    if (!response) return alert('not');
    else dispatch(createDrivers(response));
  };

  //* --------- FILTERS ---------- *//

  //* get drivers by name
  const getByName = async (name) => {
    dispatch(filterByName(name));
  };
  //* get drivers by team
  const getByTeams = (value) => {
    dispatch(filterByTeam(value));
  };
  //* order drivers
  const getByOrder = (value) => {
    dispatch(filterInOrder(value));
  };
  //* rest all filters
  const resetFilters = async () => {
    dispatch(removeFilters());
  };

  //* --------- PAGINATION ---------- *//

  const prevHandler = () => {
    dispatch(setPrevHandler());
  };
  const nextHandler = () => {
    dispatch(setNextHandler());
  };
  const specificPage = (n) => {
    dispatch(onSpecificPage(n));
  };

  return {
    resetFilters,
    getDrivers,
    getByName,
    createDriver,
    getByOrder,
    getByTeams,
    prevHandler,
    nextHandler,
    specificPage
  };
};
