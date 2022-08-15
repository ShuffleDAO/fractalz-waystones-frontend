import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  const { audioFile } = props;
  const audioPlayer = useRef(null);
  const [audioMuted, setAudioMuted] = useState(true);

  const startAndStopAudio = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.volume = 0.2;
      audioPlayer.current.play();
      setAudioMuted(false);
    } else {
      audioPlayer.current.pause();
      setAudioMuted(true);
    }
  }

  return (
    <nav>
      <ul className="nav-items">
        <li className="nav-item-logo">
          <Link to="/">
            <img className="logo" alt="Fracalz Logo" src="/assets/fractalz-logo.png" />
          </Link>
          <button onClick={startAndStopAudio} className={`audio-button ${audioMuted ? 'muted': ''}`}></button>
        </li>
        <li className="nav-item-connect">
          <a href="#">
            <img className="connect-link" alt="Link to ETC Wallet" src="/assets/buttons/connect.png" />
          </a>
        </li>
      </ul>
      <audio ref={audioPlayer} src={audioFile}></audio>
    </nav>
  );
}