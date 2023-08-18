import React from "react";
import './navigation.scss'
import { Link } from "react-router-dom";

const Navigation = () =>{
      return(
            <div className="navigation">
                  <div className="navigationLinkWrapper">
                        <Link className="navigationLink" to='/ovoJeGalerija002DaNeDaGaGaKomplikovanURL'>Galerija</Link>
                        <Link className="navigationLink" to='/ovoSuKomentariITakodjeKomplikovanURLJerNecemoPacove'>Komentari</Link>
                        <Link className="navigationLink" to='/stranicaZaVideoBogTeVideoOvdeCeBiti003GaGa '>Video</Link>
                  </div>
            </div>
      )
}

export default Navigation;