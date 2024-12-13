import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Search } from "react-bootstrap-icons";

export default function MyNavBar() {
  // Estado para controlar a exibição do campo de busca
  const [showSearch, setShowSearch] = useState(false);

  // Alterna a visibilidade do input
  const toggleSearch = () => setShowSearch((prev) => !prev);

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="cadastro">
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="search-container">

        {/* Exibe o campo de busca se showSearch for true */}
        
        {showSearch && (
          <input 
            type="text" 
            placeholder="Location..." 
            className="search-input" 
          />
        )}

        <Search 
          size={32} 
          color="white" 
          onClick={toggleSearch} 
          style={{ cursor: "pointer" }} 
        />
        
      </div>
    </nav>
  );
}

