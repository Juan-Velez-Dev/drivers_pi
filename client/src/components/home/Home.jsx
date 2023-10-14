//* Components
import Cards from '../cards/Cards'

import './home.css'

//* Hooks
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getDrivers } from '../../redux/driversSlice'

function Home () {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData () {
      const { data } = await axios.get('/drivers')
      dispatch((getDrivers(data)))
    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <Cards/>
    </div>
  )
}

export default Home
