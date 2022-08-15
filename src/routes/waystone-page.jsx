import React from "react";
import Navigation from '../components/navigation';
import VideoBackground from "../components/video-background";
import { Link } from "react-router-dom";

export default function WaystonePage() {
  return (
    <>
      <header>
        <Navigation audioFile={"/assets/audio/at-the-abyss.wav"} />
      </header>
      <main>
        <section>
          <div className="background-wrapper">
            <VideoBackground videoSrc={"/assets/videos/waystone-mintpage.mp4"} />
            <article className="waystone-content">
            <div className="extract-shard-text">
              <p className="body-text">"Greater even than the greatest discovery is to keep open the way to future discoveries..."</p>
              <p className="body-text">Just as the holo-records indicated, the Yggdrasil sapling has stabilized the crystal cache...</p>
              <p className="body-text">Will you extract what lies within, Legion? Will you dare to step into the unknown?</p>
              <div className="link-wrapper">
                  <a className="extract-shard-link" href="#">
                    <img alt="Link to extract shard" src="/assets/buttons/shard.png" />
                  </a>
                  <p className="extract-link-text">1 per wallet | 1,200 total</p>
              </div>
            </div>
            <div className="observatorium-text">
              <p className="body-text">Once you have obtained a Shard, enter the Observatorium to explore the nature of this mysterious crystal further...</p>
              <div className="link-wrapper">
                <Link to="/fractalz" className="waystone-link">
                  <img alt="Link to extract shard" src="/assets/buttons/observatorium.png" />
                </Link>
              </div>
                <p className="waystone-link-text">Were you unable to extract a Shard?</p>
                <p className="waystone-link-text">Perhaps the <a target="_blank" href="https://opensea.io/collection/fractalz-waystones" rel="noreferrer">Legion Bazaar</a> may have what you are looking for...</p>
            </div>
          </article>
          </div>
        </section>
      </main>
    </>
  );
}