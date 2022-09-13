import type {NextPage} from 'next'
import Header from "../components/header";
import VideoBackground from "../components/video-background";
import ConnectButton from "../components/connect-button";
import Image from "next/image";
import Navigation from "../components/navigation";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <section>
                <VideoBackground
                    webmSrc="/assets/videos/Homepge_Background.webm"
                    mp4Src="/assets/videos/Homepge_Background.mp4"
                    poster="/assets/videos/Homepge_Background-poster.jpg"
                    offset="-translate-x-[52.5%] md:-translate-x-1/2"
                />
            </section>
            <main className={"min-h-screen relative"}>
                <section>
                    <Navigation
                        audioFile={"/assets/audio/at-the-abyss.wav"}
                    />
                </section>
                <section className={"absolute inset-x-0 bottom-0 w-screen"}>
                    <div className={"flex flex-wrap flex-col md:flex-row md:justify-between justify-center md:px-10 pb-5 flex justify-between items-center"}>
                        <div className="grid grid-cols-4 gap-4 py-5">
                            <a href="https://twitter.com/fractalzNFT" target="_blank" rel="noreferrer">
                                <Image height={50} width={50} alt="Link to twitter page" src="/assets/icons/Twitter.png" />
                            </a>
                            <a href="https://discord.gg/fractalz" target="_blank" rel="noreferrer">
                                <Image height={50} width={50} alt="Link to discord server" src="/assets/icons/Discord.png" />
                            </a>
                            <a href="https://opensea.io/collection/fractalz-waystones" target="_blank" rel="noreferrer">
                                <Image height={50} width={50} alt="Link to Open Sea page" src="/assets/icons/OpenSea.png" />
                            </a>
                            <a href="https://etherscan.io/address/0x163f5496150e9539FB608cBE0130DD1778EdeC20" target="_blank" rel="noreferrer">
                                <Image height={50} width={50} alt="Link to Etherscan page" src="/assets/icons/Etherscan.png" />
                            </a>
                        </div>
                        <div>
                            <Link href="/waystones">
                                <button
                                    className={"font-['redress'] text-5xl pt-2 pb-4 mb-4 px-8 border-glow rounded-full"}
                                >begin journey</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
