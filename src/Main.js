import Navigation from './components/navigation';
import VideoBackground from "./components/video-background";
import Footer from "./components/footer";
import { Helmet } from "react-helmet";

export default function Main() {
  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://www.fractalz.io/"/>
        <meta property="twitter:url" content="https://www.fractalz.io/"/>
      </Helmet>
      <header>
        <Navigation audioFile={"/assets/audio/at-the-abyss.wav"} />
      </header>
      <main>
        <section>
          <div className="background-wrapper">
            <VideoBackground
              webmSrc="/assets/videos/Homepge_Background.webm"
              mp4Src="/assets/videos/Homepge_Background.mp4"
              poster="/assets/videos/Homepge_Background.jpg"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}