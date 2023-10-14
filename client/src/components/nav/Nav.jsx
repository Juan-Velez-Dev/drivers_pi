import Search from '../search/Search'
import Create from '../create/Create'
import About from '../about/About'
import './nav.css'
function Nav () {
  return (
    <div className='nav-container'>
      <Search className='search'/>
      <Create className='create'/>
      <About className='about'/>
    </div>
  )
}

export default Nav
