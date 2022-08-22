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
            <VideoBackground videoSrc={"/assets/videos/Homepge_Background.webm"} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}