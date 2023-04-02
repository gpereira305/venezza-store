import React from 'react';
import { Link } from "react-router-dom";
import exit from "../../../assets/icons/exit-icon.svg";
import './storeGoback.css';



const StoreGoback = () => {
  return (
    <div className='goback'>
      <Link className="goback__link" to={"/"}>
         <img src={exit} alt="Sair" />
          Voltar
     </Link> 
    </div>
  )
}

export default StoreGoback;
