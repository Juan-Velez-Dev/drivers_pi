import { useAppDispatch } from './store';
import { getAllTeams } from '../redux/teamsSlice';
import axios from 'axios';

export const useTeamsActions = () => {
  const dispatch = useAppDispatch();
  const getTeams = async () => {
    const { data } = await axios('/teams');
    dispatch(getAllTeams(data));
  };
  return { getTeams };
};
