import React from "react";
import Navigation from '../components/navigation';
import VideoBackground from "../components/video-background";

export default function WaystonePage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <section>
          <div class="background-wrapper">
            <VideoBackground videoSrc={"/assets/videos/waystone-mintpage.mp4"} />
            <article class="waystone-content">
            <div class="extract-shard-text">
              <p class="body-text">"Greater even than the greatest discovery is to keep open the way to future discoveries..."</p>
              <p class="body-text">Just as the holo-records indicated, the Yggdrasil sapling has stabilized the crystal cache...</p>
              <p class="body-text">Will you extract what lies within, Legion? Will you dare to step into the unknown?</p>
              <div class="link-wrapper">
                <a href="#">
                  <img class="extract-shard-link" alt="Link to extract shard" src="/assets/buttons/shard.png" />
                </a>
                <p>1 per wallet|1,200 total</p>
              </div>
            </div>
            <div class="observatorium-text">
              <p class="body-text">Once you have obtained a shard. Enter the observatorium to explore the nature of this mysterious crystal further...</p>
              <div class="link-wrapper">
                <a href="#">
                  <img class="extract-shard-link" alt="Link to extract shard" src="/assets/buttons/observatorium.png" />
                </a>
              </div>
              <p>Were you unable to extract a Shard? Perhaps the <a href="#">Legion Bazaar</a> may have what you are looking for...</p>
            </div>
          </article>
          </div>
        </section>
      </main>
    </>
  );
}