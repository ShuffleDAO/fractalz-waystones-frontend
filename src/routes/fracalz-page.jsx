import React from "react";
import Navigation from '../components/navigation';
import VideoBackground from "../components/video-background";


export default function FracalzPage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <section>
          <div class="background-wrapper">
            <VideoBackground videoSrc={"/assets/videos/mintpage.mp4"} />
            <article class="waystone-content">
              <div class="extract-shard-text">
                <p class="body-text">The legend states fractalz were summoned with an ancient stone. Could this object you posses be the key to their arrival? Resources needed to activate the shard cost 0.03 Ethereum.</p>
                <div class="link-wrapper">
                  <a href="#">
                    <img class="waystone-link" alt="Link to extract shard" src="/assets/buttons/waystone.png" />
                  </a>
                  <p>3 per wallet 1 x / ????? </p>
                </div>
              </div>
          </article>
          </div>
        </section>
      </main>
    </>
  );
}