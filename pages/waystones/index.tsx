import type { NextPage } from 'next'
import Header from "../../components/header";
import VideoBackground from "../../components/video-background";
import ConnectButton from "../../components/connect-button";
import Navigation from "../../components/navigation";

const Mint: NextPage = () => {
  return (
    <>
        <Header/>
        <section>
            <VideoBackground
                mp4Src="/assets/videos/waystone-mintpage.mp4"
                poster="/assets/videos/waystone-mintpage-poster.jpg"
                offset="-translate-x-[35.75%] md:-translate-x-1/2"
            />
        </section>
        <main className={"min-h-screen"}>
            <section className={"relative"}>
                <Navigation
                    audioFile={"/assets/audio/at-the-abyss-bass.mp3"}
                />
            </section>
        </main>
    </>
  )
}

export default Mint
