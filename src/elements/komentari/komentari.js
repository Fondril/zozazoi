import React from "react";
import './komentari.scss'
import Mj from '../../assets/profilePics/mj.jpg'

const Komentari = () =>{
      return(
            <div className="komentariWrapper">

                  <div className="komentarWrapper">
                        <div className="komentator">
                              <img className="picture" src={Mj} alt="slicica"/>
                              <div className="name">MJ</div>
                        </div>
                        <div className="komentar">Srecan rodjendan, Andjela legendo!</div>
                  </div>

                  <div className="komentarWrapper">
                        <div className="komentator">
                              <img className="picture" src={Mj} alt="slicica"/>
                              <div className="name">Nije MJ</div>
                        </div>
                        <div className="komentar">Spatula est ludem ludem eko!</div>
                  </div>

            </div>
      )
}

export default Komentari;