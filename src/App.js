import './App.css';
import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import song from "./music.mp3";
import house from "./house_resized.mp4";
import users from "./users_loading.mp4";
import Salv_e from "./salv_e"
import Omega from "./omega"

var aud = new Audio(song);

function Home(props){
  return (
      <div>
          <h1 className = "h1Name">
          <Link className = "userLink" to="/omega" onClick ={() => 
              aud.pause()
            }>[USER] omega</Link>

            <Link className = "userLink" to="/salv_e" onClick ={() => 
              aud.pause()
            }>[USER] Salv.E</Link>
          </h1>
          <h1 className = "h1Loading">more users loading</h1>
        <BackgroundVideo/>
        <BackgroundMusic/>
      </div>
  )
}

function UsersList(props) {
  return(
    <div>

    </div>
  )
}

function BackgroundMusic(props) {
  var isPlaying = false;
  aud.pause();

  function playPause() {
    if (isPlaying) {
      aud.pause();
    } else {
      aud.play();
      aud.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);
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
      <div>
        <div id="mc_embed_signup">
        <form action="https://github.us17.list-manage.com/subscribe/post?u=98ac01e3c7f4913ff392be408&amp;id=8f998f79d7&amp;f_id=00534fe0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self">
        <div id="mc_embed_signup_scroll">

        <div className="mc-field-group">
        <input type="email" name="EMAIL" className="required email inputForm" id="mce-EMAIL" required placeholder="ENTER THE VOID"/>
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

    </div>
    <div className = "messageBox">
        ENTER YOUR EMAIL FOR EXCLUSIVE UPDATES
    </div>
    <UsersList/>

      <video autoPlay muted loop playsInline className = "myVideo2">
        <source src={users} type="video/mp4"/>
          Your browser does not support HTML5 video.
      </video>

    </div>
  )
}

function App() {
  const location = useLocation();
  return (
      <div className = "App">
        <nav className = "navMenu">
          <Link className = "homeButton" to="/">Home</Link>
        </nav>
        <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route exact path = "/salv_e" element = {<Salv_e/> } />
          <Route exact path = "/omega" element = {<Omega/> } />
        </Routes>
        </CSSTransition>
      </TransitionGroup>
      </div>
    )
}

export default App;