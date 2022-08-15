import React from "react";
import Navigation from './components/navigation';
import VideoBackground from "./components/video-background";
import Footer from "./components/footer";

export default function Main() {
  return (
    <>
      <header>
        <Navigation audioFile={"/assets/audio/at-the-abyss.wav"} />
      </header>
      <main>
        <section>
          <div className="background-wrapper">
            <VideoBackground videoSrc={"/assets/videos/homepage-final.mp4"} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}