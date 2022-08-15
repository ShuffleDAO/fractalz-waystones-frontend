import React from "react";
import Navigation from '../components/navigation';
import VideoBackground from "../components/video-background";

export default function FractalzPage() {
  return (
    <>
      <header>
        <Navigation audioFile={"/assets/audio/at-the-abyss-bass.mp3"} />
      </header>
      <main>
        <section>
          <div className="background-wrapper">
            <VideoBackground videoSrc={"/assets/videos/mintpage.mp4"} />
            <article className="waystone-content">
              <div className="activate-waystone-text">
                <p className="body-text">The legend states fractalz were summoned with an ancient stone. Could this object you posses be the key to their arrival? Resources needed to activate the shard cost 0.03 Ethereum.</p>
                <div className="link-wrapper">
                  <a className="activate-waystone-link" href="#">
                    <img alt="Link to extract shard" src="/assets/buttons/waystone.png" />
                  </a>
                  <p className="activate-waystone-link-text">3 per wallet 1 x / ????? </p>
                </div>
              </div>
          </article>
          </div>
        </section>
      </main>
    </>
  );
}