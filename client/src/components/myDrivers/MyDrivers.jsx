import React from 'react';
import Card from '../card/Card';
import { useSelector } from 'react-redux';

export default function MyDrivers () {
  const { driversCreated } = useSelector(state => state.drivers);
  return (
    <div>MyDrivers</div>
  );
}
