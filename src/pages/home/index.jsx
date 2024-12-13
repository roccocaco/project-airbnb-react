import { useState } from "react";
import { hospedagens } from "../../data/hospedagem";
import { typeOfPlace } from "../../data/typeOfPlace";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  const [hosts, setHosts] = useState(hospedagens); // Estado inicial com todas as hospedagens


  function filterByType(type) {
    const filteredHosts = hospedagens.filter((host) => host.type === type);
    setHosts(filteredHosts);
  }

  function handleClickNavigate(name) {
    navigate(`/hosting/${name}`)
    
  }
  
  return (
    <div className="home">
      <div className="typeOfPlace">
        {typeOfPlace.map((type, index) => (
          <div
            key={index}
            className="place"
            onClick={() => filterByType(type)} // Filtra por tipo ao clicar
          >
            {type}
          </div>
        ))}
      </div>

      <div className="chales">
        {hosts.map((e) => (
          <div key={e.id} onClick={() => handleClickNavigate(e.name)} className="chale">
            <img src={e.pic} alt="" />
            <h5>{e.where}</h5>
            <p>{e.date}</p>
            <h5>{e.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
