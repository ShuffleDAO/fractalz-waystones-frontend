import React from "react";
import Navigation from '../components/navigation';
import VideoBackground from "../components/video-background";
import ActiveWaystoneButton from '../components/activate-waystone-button';
import WaystoneInfo from "../components/waystone-info";
import { Helmet } from "react-helmet";

export default function MintPage() {

  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://www.fractalz.io/mint"/>
        <meta property="twitter:url" content="https://www.fractalz.io/mint"/>
      </Helmet>
      <header>
        <Navigation audioFile={"/assets/audio/at-the-abyss.mp3"} />
      </header>
      <main>
        <section>
          <div className="background-wrapper">
            <VideoBackground videoSrc={"/assets/videos/mintpage.webm"} />
            <article className="waystone-content">
              <div className="activate-waystone-text">
                <p className="body-text">The Emergence appears to have begun…</p>
                <p className="body-text">Legends tell of ancient stones, known as Waystones, that were used to call across the Cosmos to Fractalz.</p>
                <p className="body-text">Could this Shard you possess be the key to hailing them through the Void?</p>
                <div className="link-wrapper">
                  <ActiveWaystoneButton />
                  <WaystoneInfo />
                </div>
              </div>
          </article>
          </div>
        </section>
      </main>
    </>
  );
}