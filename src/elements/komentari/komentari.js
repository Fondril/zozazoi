import React from "react";
import './komentari.scss'
import Milica from '../../assets/profilePics/milica.jpg'
import MickinaPoruka from '../../assets/profilePics/mickinaPoruka.jpg'
import Cestitke from '../../cestitke'

const Komentari = () =>{

      const komentarRender = (item) =>{
            return(
                  <div className="komentarWrapper">
                        <div className="komentator">
                              <img className="picture" src={item.profilePic} alt="slicica"/>
                              <div className="name">{item.name}</div>
                        </div>
                        <div className="komentar">{item.comment}</div>
                  </div>
            )
      }

      return(
            <div className="komentariWrapper">

                  <div className="komentarWrapper">
                        <div className="komentator">
                              <img className="picture" src={Milica} alt="slicica"/>
                              <div className="name">Micka</div>
                        </div>
                        <img className="mickinaPoruka" src={MickinaPoruka} alt="slika mickine cestitke"/>
                        <div className="komentar">Paa ne znam napisi kaoo aaaa ljubavi srecan rodjendan. Zelim da ti se sve zelje ostvare iiiii aaaaaa (5 sekundi pauza) da. Ne znam. Stao mi je.. Nisam trenutno kreativna. Daaaaaa. Da si mi uvek srecna iii i jos malo dolazim da budem tu pa da se. Druzimo. Svakog dana. Hah. Haaghgh. Ne znam. Ne znam. Dodaj nesto sladje molim te.</div>
                  </div>

                  {Cestitke.map((item) => komentarRender(item))}


            </div>
      )
}

export default Komentari;