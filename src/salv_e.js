import React from "react"
import "./index.css"
import house from "./house_resized.mp4";
import salve_img from "./images/rinse.jpg";
import instagram from "./images/instagram.png"
import spotify from "./images/spotify.png"
import youtube from "./images/youtube.png"

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
                        <img className = "instagramButton" alt = "instagram" src={instagram} />
                    </a>
                    <a href = "https://open.spotify.com/artist/2DZqOc8UYa9lum2mOTnLPr?si=ICzH8GKcRU2nssZJ7RPpBg">
                        <img className = "spotifyButton" alt = "instagram" src={spotify} />
                    </a>
                    <a href = "https://www.youtube.com/channel/UCjJXBMyqP7vSNoAxeYp46rg">
                        <img className = "youtubeButton" alt = "instagram" src={youtube} />
                    </a> 
                <iframe title = "Salv.E Spotify" className = "spotifyPlayer" src="https://open.spotify.com/embed/album/5rOIYOEDWgi213kke9CDuf?utm_source=generator&theme=0" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

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