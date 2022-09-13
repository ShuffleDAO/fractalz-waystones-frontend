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
            mp4Src="/assets/videos/mintpage.mp4"
            poster="/assets/videos/mintpage-poster.jpg"
            offset="-translate-x-[35.75%] md:-translate-x-1/2"
            audioFile={"/assets/audio/at-the-abyss.wav"}
        >
            <section className={"absolute top-0 w-screen px-5"}>
                <motion.div
                    exit={{opacity: 0}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.75, ease: 'easeInOut'}}
                    className={"flex flex-col content-center gap-y-10 px-5 md:px-10 py-5 pt-60 md:pt-40 min-h-screen"}
                >
                    <div className={"flex justify-center md:justify-end"}>
                        <p className={"text-2xl max-w-lg text-center md:text-right"}>
                            The Emergence appears to have begun...
                        </p>
                    </div>
                    <div className={"flex justify-center md:justify-end"}>
                        <p className={"max-w-xl text-lg text-center md:text-right"}>
                            Legends tell of ancient stones, known as Waystones, that were used to call across the Cosmos
                            to Fractalz.
                        </p>
                    </div>
                    <div className={"flex justify-center md:justify-end"}>
                        <p className={"max-w-xl text-lg text-center md:text-right"}>
                            Could this Shard you possess be the key to hailing them?
                        </p>
                    </div>
                    <div className={"flex grow justify-center md:justify-end pb-20 md:pb-0"}>
                        <div className={"self-end"}>
                            <FractalzLink
                                onClick={()=>{setModalHidden(false)}}
                                type={'action'}
                            >
                                activate waystone
                            </FractalzLink>
                        </div>
                    </div>
                </motion.div>
            </section>
        </FractalzPage>
    )
}

export default Mint
