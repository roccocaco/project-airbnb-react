import { useParams } from "react-router-dom";
import { hospedagens } from "../../data/hospedagem";
import { imagens } from "../../data/img";
import { hosts } from "../../data/hostedby";
import "./hosting.css";

function Hosting() {
  const params = useParams();
  const findHospedagem = hospedagens.find((e) => e.name === params.name);
  return (
    <div className="div-container">
      <h3>{findHospedagem.name}</h3>
      <div className="images">
        <div className="img-principal">
          <img src={findHospedagem.pic} alt="" />
        </div>
        <div className="img-secundaria">
          <img src={imagens.img1} alt="" />
          <img src={imagens.img2} alt="" />
          <img src={imagens.img3} alt="" />
          <img src={imagens.img4} alt="" />
        </div>
      </div>
      <div className="details">
        <p>{findHospedagem.where}</p>
        <p>{findHospedagem.city}</p>
        <p>{findHospedagem.state}</p>
        <p>{findHospedagem.type}</p>
        <p>{findHospedagem.price}</p>
      </div>
      <div className="subcontainer">
        <h5>{hosts.hostedby1}</h5>
        <img src={hosts.img1} alt="" />
        <img src={hosts.pic1} alt="" />
        <p>{hosts.guest1}</p>
        <p>comments: {hosts.comments1}</p>
        <p>note: {hosts.review1}</p>
        <button>Entrar em contato</button>
      </div>
    </div>
  );
}

export default Hosting;
