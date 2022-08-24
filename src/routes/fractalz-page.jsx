import React, { useState } from "react";
import Navigation from '../components/navigation';
import VideoBackground from "../components/video-background";
import { Helmet } from "react-helmet";

export default function FractalzPage() {
  const [isAllowed, setIsAllowed] = useState(false);

  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://www.fractalz.io/fractalz"/>
        <meta property="twitter:url" content="https://www.fractalz.io/fractalz"/>
      </Helmet>
      <header>
        <Navigation audioFile={"/assets/audio/at-the-abyss.mp3"} />
      </header>
      <main>
        <section>
          <div className="background-wrapper">
            <VideoBackground videoSrc={"/assets/videos/mintpage.mp4"} />
            <article className="waystone-content">
              <div className="activate-waystone-text">
                <p className="body-text">The Emergence appears to have begun…</p>
                <p className="body-text">Legends tell of ancient stones, known as Waystones, that were used to call across the Cosmos to Fractalz.</p>
                <p className="body-text">Could this Shard you possess be the key to hailing them through the Void?</p>
                <div className={`link-wrapper ${!isAllowed ? 'disabled': ""}`}>
                  <button disabled={!isAllowed} className="activate-waystone-link">
                    <img alt="Link to extract shard" src="/assets/buttons/waystone.png" />
                  </button>
                  <p className="activate-waystone-link-text">5 per wallet | X / ????</p>
                </div>
              </div>
          </article>
          </div>
        </section>
      </main>
    </>
  );
}