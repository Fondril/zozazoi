import React from "react";
import './galerija.scss'


const Galerija = () =>{
      
      const images = require.context('../../assets/gallery', false);

      const imageList = images.keys().map(image => images(image));


            return(
                  <div className="galerija">
                        <div className="galerijaPhotoWrapper">
                              {imageList.map((image, index) => (
                                    <img className="photo" key={index} src={image} alt='djela'/>
                                    ))}
                        </div>
                  </div>)}



export default Galerija;