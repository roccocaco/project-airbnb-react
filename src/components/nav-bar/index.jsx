import { NavLink } from "react-router-dom"
import './navbar'

function NavBar() {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
      </nav>
    )   
  }
  
  export default NavBar