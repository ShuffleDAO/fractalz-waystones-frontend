import type {NextPage} from 'next'
import FractalzPage from "../../components/fractalz-page";
import {motion} from "framer-motion";
import FractalzLink from "../../components/fractalz-link";
import FractalzModal from "../../components/fractalz-modal";
import {useState} from "react";

const Mint: NextPage = () => {

    const [isModalHidden,setModalHidden] = useState(true)

    return (
        <FractalzPage
            mp4Src="/assets/videos/waystone-mintpage.mp4"
            poster="/assets/videos/waystone-mintpage-poster.jpg"
            offset="-translate-x-[35.75%] md:-translate-x-1/2"
            audioFile={"/assets/audio/at-the-abyss-bass.mp3"}
        >
            <section className={"absolute top-0 w-screen px-5"}>
                <motion.div
                    exit={{opacity: 0}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className={"flex flex-col content-center gap-y-10 px-5 md:px-10 py-5 pt-52 md:pt-40 min-h-screen"}
                >
                    <div className={"flex justify-center md:justify-end"}>
                        <p className={"text-2xl max-w-md text-center md:text-right"}>
                            &quot;Greater even than the greatest discovery is to keep open the
                            way to future discoveries...&quot;
                        </p>
                    </div>
                    <div className={"flex justify-center md:justify-end"}>
                        <p className={"max-w-lg text-lg text-center md:text-right"}>
                            Just as the holo-records indicated, the Yggdrasil sapling has
                            stabilized the crystal cache...
                        </p>
                    </div>
                    <div className={"flex justify-center md:justify-end"}>
                        <p className={"max-w-md text-lg text-center md:text-right"}>
                            Will you extract what lies within, Legion?<br/>Will you dare to
                            step into the unknown?
                        </p>
                    </div>
                    <div className={"flex justify-center md:justify-end"}>
                        <p className="max-w-md text-xl font-bold text-center md:text-right">
                            Were you unable to extract a Shard?<br/>
                            Visit the{' '}
                            <a
                                target="_blank"
                                href="https://opensea.io/collection/fractalz-waystones"
                                rel="noreferrer"
                                className={"text-[lime] font-['comic-runes','cursive']"}
                            >
                                Legion Bazaar
                            </a>
                        </p>
                    </div>
                    <div className={"flex grow justify-center md:justify-end md:pb-0"}>
                        <div className={"self-end"}>
                            <FractalzLink
                                href={'/mint'}
                                type={'action'}
                            >
                                enter observatorium
                            </FractalzLink>
                        </div>
                    </div>
                </motion.div>
            </section>
        </FractalzPage>
    )
}

export default Mint
