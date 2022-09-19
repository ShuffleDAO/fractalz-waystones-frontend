import type {NextPage} from 'next'
import Header from "../components/header";
import VideoBackground from "../components/video-background";
import ConnectButton from "../components/connect-button";
import Image from "next/image";
import Navigation from "../components/navigation";
import Link from "next/link";
import { motion } from 'framer-motion';
import FractalzLink from "../components/fractalz-link";
import FractalzPage from "../components/fractalz-page";

const Home: NextPage = () => {
    return (
        <FractalzPage
            mp4Src="/assets/videos/Homepge_Background.mp4"
            poster="/assets/videos/Homepge_Background-poster.jpg"
            offset="-translate-x-[52.5%] md:-translate-x-1/2"
            audioFile={"/assets/audio/at-the-abyss.wav"}
        >
            <section className={"absolute inset-x-0 bottom-0 w-screen"}>
                <motion.div
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    className={"flex flex-wrap flex-col md:flex-row md:justify-between justify-center md:px-10 pb-5 flex justify-between items-center"}>
                    <div className="order-last md:order-first grid grid-cols-4 gap-4 py-5">
                        <FractalzLink
                            href="https://twitter.com/fractalzNFT" target="_blank" rel="noreferrer">
                            <Image height={50} width={50} alt="Link to twitter page" src="/assets/icons/Twitter.png" />
                        </FractalzLink>
                        <FractalzLink href="https://discord.gg/fractalz" target="_blank" rel="noreferrer">
                            <Image height={50} width={50} alt="Link to discord server" src="/assets/icons/Discord.png" />
                        </FractalzLink>
                        <FractalzLink href="https://opensea.io/collection/fractalz-waystones" target="_blank" rel="noreferrer">
                            <Image height={50} width={50} alt="Link to Open Sea page" src="/assets/icons/OpenSea.png" />
                        </FractalzLink>
                        <FractalzLink href="https://etherscan.io/address/0x4c8cf80a3a83c2d853956005b3a5eceb0a7d91aa" target="_blank" rel="noreferrer">
                            <Image height={50} width={50} alt="Link to Etherscan page" src="/assets/icons/Etherscan.png" />
                        </FractalzLink>
                    </div>
                    <div>
                        <FractalzLink
                            href="/waystones"
                            type={'action'}
                        >
                            begin journey
                        </FractalzLink>
                    </div>
                </motion.div>
            </section>
        </FractalzPage>
    )
}

export default Home
