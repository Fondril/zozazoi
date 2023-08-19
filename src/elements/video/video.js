import React from "react";
import './video.scss';

const Video = () =>{

      const videos = require.context('../../assets/videos', false);
      const videoList = videos.keys().map(video => videos(video));

      return(
            <div className="videoElement">
                  <div className="videoWrapper">
                        {videoList.map((video) => (
                              <video src={video} className='video' controls></video>
                              ))}
                  </div>
            </div>
      )
}

export default Video;