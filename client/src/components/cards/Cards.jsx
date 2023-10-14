import Card from '../card/Card'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Pagination from '../pagination/Pagination'

function Cards () {
  const drivers = useSelector(state => state.drivers).slice(0, 4) // slice pare ver 4 por el momento
  return (
    <div>
      <h1>Cards</h1>
      {drivers.map((driver, i) => <Card driver={driver} key={i}/>)}
      <Pagination/>
    </div>
  )
}

export default Cards
