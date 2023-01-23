import './App.css';
import React from "react";
import song from "./music.mp3";
import house from "./house_resized.mp4";
import users from "./users_loading.mp4";

function BackgroundMusic(props) {
  var aud = new Audio(song);
  var isPlaying = false;
  aud.pause();

  function playPause() {
    if (isPlaying) {
      aud.pause();
    } else {
      aud.play();
    }
    isPlaying = !isPlaying;
  }
  return (
    <button className = "soundButton" onClick={playPause}>
    </button>
  )
}

function BackgroundVideo(props) {
  return (
    <div>
      <video autoPlay muted loop playsInline className = "myVideo">
        <source src={house} type="video/mp4"/>
          Your browser does not support HTML5 video.
      </video>

      <div id="mc_embed_signup">
  <form action="https://github.us17.list-manage.com/subscribe/post?u=98ac01e3c7f4913ff392be408&amp;id=8f998f79d7&amp;f_id=00534fe0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self">
      <div id="mc_embed_signup_scroll">
      
<div className="mc-field-group">
<input type="email" name="EMAIL" className="required email inputForm" id="mce-EMAIL" required placeholder="ENTER EMAIL"/>
<span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
</div>
<div id="mce-responses" className="clear foot">
  <div className="response, mce-responses" id="mce-error-response"></div>
  <div className="response, mce-responses" id="mce-success-response"></div>
</div> 
  <div className = "mce-responses-2" aria-hidden="true">
    <input type="text" name="b_98ac01e3c7f4913ff392be408_8f998f79d7" tabIndex="-1"/>
    </div>
      <div className="optionalParent">
        <input type="submit" className = "mce-responses-3" name="subscribe" id="mc-embedded-subscribe"/>
      </div>
  </div>
</form>
</div>
      <h1 className = "h1Name">[USER] Salv.E</h1>
      <h1 className = "h1Loading">more users loading</h1>

      <video autoPlay muted loop playsInline className = "myVideo2">
        <source src={users} type="video/mp4"/>
          Your browser does not support HTML5 video.
      </video>

    </div>
  )
}

function App() {
  return (
  <div className="App">
      <BackgroundMusic/>
      <BackgroundVideo/>
  </div>)
}

export default App;