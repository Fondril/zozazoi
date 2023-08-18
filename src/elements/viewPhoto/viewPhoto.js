import React from "react";
import './viewPhoto.scss'

const ViewPhoto = (item, {handleClickAway}) =>{
      return(
            <div className="viewPhotoBackground" onClick={handleClickAway}> 
                  <img className="viewPhoto" src={item.imageLink} alt='djela'/>
            </div>
      )
}

export default ViewPhoto;