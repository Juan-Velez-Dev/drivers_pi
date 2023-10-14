import axios from 'axios'
import { useState } from 'react'
import './search.css'

function Search () {
  const [name, setName] = useState('')
  const [drivers, SetDrivers] = useState(null)

  const onSearch = async () => {
    const { data } = await axios(`/driver/?name=${name.toLocaleLowerCase()}`)
    SetDrivers(data)
  }

  const handleChange = (event) => {
    const { value } = event.target
    setName(value)
  }

  return (
    <div className='search-container'>
      <input
      type='text'
      name='search'
      className='search-input'
      value={name}
      placeholder='driver name'
      onChange={handleChange}
      />
      <button onClick={onSearch} className='button-30'>Search</button>
    </div>
  )
}

export default Search
