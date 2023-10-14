import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getDrivers } from '../../redux/driversSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Home () {
  const dataApi = useSelector(state => state.drivers)

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData () {
      const { data } = await axios.get('/drivers')
      dispatch((getDrivers(data)))
    }
    fetchData()
  }, [])
  console.log(dataApi)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
