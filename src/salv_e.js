import React from "react"
import "./index.css"
import house from "./house_resized.mp4";
import salve_img from "./images/rinse.jpg";

function BackgroundVideo(props) {
    return (
    <div className="page">
      <div>
        <video autoPlay muted loop playsInline className = "myVideo">
          <source src={house} type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>
  
        <div className = "userProfileBox">
            
            <div className = "userProfileInfo">
                <img className = "userProfilePic"src = {salve_img} alt = "salv.e"/>
                
                <p className = "userTextBox">
                    [USER] Salv.E is an artist developed out of Oregon. Fusing various atmosphere's inspired by Oregon's beautiful landscape with dark electronic and hip hop beats.
                </p>
                    <a href = "https://www.instagram.com/user_salv.e/">
                        <button className = "instagramButton"></button>
                    </a>
                    <a href = "https://open.spotify.com/artist/2DZqOc8UYa9lum2mOTnLPr?si=ICzH8GKcRU2nssZJ7RPpBg">
                        <button className = "spotifyButton"></button>
                    </a>
                    <a href = "https://www.youtube.com/channel/UCjJXBMyqP7vSNoAxeYp46rg">
                        <button className = "youtubeButton"></button>
                    </a>
            </div>
        </div>
      </div>
      </div>
    )
  }

function Salv_e(props){
    return (
        <div className = "userPage">
            <BackgroundVideo/>

        </div>
    ) 
}

export default Salv_e;