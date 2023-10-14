import axios from 'axios'
import { useState } from 'react'

function Search () {
  const [name, setName] = useState('')
  const [drivers, SetDrivers] = useState(null)

  const onSearch = async () => {
    const { data } = await axios(`/driver/?name=${name.toLocaleLowerCase()}`)
    SetDrivers(data)
  }
  // console.log(drivers)

  const handleChange = (event) => {
    const { value } = event.target
    setName(value)
  }

  return (
    <div>
      <h1>Search components</h1>
      <input
      type='text'
      name='search'
      value={name}
      onChange={handleChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  )
}

export default Search
