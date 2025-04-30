import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/p-logo.jpg'
import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar-container'>
      <div className='d-flex logo'>
        <img src={logo} alt="" />
        <h2 className='title2'>Card Crafter</h2>
      </div>
      <div className='nav-links'>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>
        <NavLink
          to="/library"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Library
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Create
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
