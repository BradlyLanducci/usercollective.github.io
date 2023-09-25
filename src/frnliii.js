import React from "react"
import "./index.css"
import house from "./house_resized.mp4";
import frnliii_img from "./images/frnliii.jpg";
import instagram from "./images/instagram.png"
import spotify from "./images/spotify.png"
import soundcloud from "./images/soundcloud.png"

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
                <img className = "userProfilePic"src = {frnliii_img} alt = "salv.e"/>
                
                
                <p className = "userTextBox">
                [USER] FRNLiii, one of seven creatives in the hyper creative collective, [USER] OMEGA, is a dynamic and visionary music artist who combines influences to create a sound uniquely titled the "social friendly" sound. With a passion for storytelling and a gift for melody, [USER] FRNLiii crafts songs that resonate on a metaphorical & emotional level.

Born and raised in North Chicago, FRNLiii began his musical journey at a young age, drawing inspiration from a diverse range of influences spanning from grunge rock pioneers to Chicagoland area musical legends such as Kanye West, R. Kelly, Michael Jackson, and Lupe Fiasco. This eclectic musical upbringing shines through in his music, which seamlessly weaves together noticeable elements of each influence.

Highlighted for his thought-provoking lyrics, FRNLiii invites listeners into a world of introspection and relatability. Each song is a testament to his ability to convey universal experiences through a deeply personal lens.

Follow [USER] FRNLiii on Social Media Links for the latest updates, releases, and tour dates.
                </p>


                    <a href = "https://www.instagram.com/user_frnliii/">
                        <img className = "instagramButton" alt = "instagram" src={instagram} />
                    </a>
                    <a href = "https://open.spotify.com/artist/206oiv2FUhuYbsvlYZYSgD">
                        <img className = "spotifyButton" alt = "spotify" src={spotify} />
                    </a>
                    <a href = "https://soundcloud.com/frnliii">
                        <img className = "soundcloudButton" alt = "soundcloud" src={soundcloud} />
                    </a> 
                {/* <iframe title = "Salv.E Spotify" className = "spotifyPlayer" src="https://open.spotify.com/embed/album/5rOIYOEDWgi213kke9CDuf?utm_source=generator&theme=0" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                <iframe title = "Salv.E Spotify" className = "spotifyPlayer" src="https://open.spotify.com/embed/artist/206oiv2FUhuYbsvlYZYSgD?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
    )
  }

function FRNLiii(props){
    return (
        <div className = "userPage">
            <BackgroundVideo/>

        </div>
    ) 
}

export default FRNLiii;