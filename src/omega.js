import React from "react"
import "./index.css"
import house from "./house_resized.mp4";
import omega from "./images/omega.png";

function BackgroundVideo(props) {
    return (
      <div>
        <video autoPlay muted loop playsInline className = "myVideo">
          <source src={house} type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>
  
        <div className = "userProfileBox">
            
            <div className = "userProfileInfo">
                <img className = "userOmegaPic" src = {omega} alt = "omega"/>
                
                <p className = "userTextBox">
                USER OMEGA is a collective of creatives that range from beat production and songwriting to web design and visual aesthetics. They were established in 2022 via a Zoom meeting. They are spread across the United States in different locations with the same goal in bringing the [USER] experience to everyone that comes across their creations. 
                </p>
                    {/* <a href = "https://www.instagram.com/user_salv.e/">
                        <button className = "instagramButton"></button>
                    </a>
                    <a href = "https://open.spotify.com/artist/2DZqOc8UYa9lum2mOTnLPr?si=ICzH8GKcRU2nssZJ7RPpBg">
                        <button className = "spotifyButton"></button>
                    </a>
                    <a href = "https://www.youtube.com/channel/UCjJXBMyqP7vSNoAxeYp46rg">
                        <button className = "youtubeButton"></button>
                    </a> */}
            </div>
        </div>
      </div>
    )
  }

function Omega(props){
    return (
        <div className = "userPage">
            <BackgroundVideo/>

        </div>
    ) 
}

export default Omega;