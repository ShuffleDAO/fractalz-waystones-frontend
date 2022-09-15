import type {NextPage} from 'next'
import FractalzPage from "../../components/fractalz-page";
import {AnimatePresence, motion} from "framer-motion";
import FractalzLink from "../../components/fractalz-link";
import FractalzModal from "../../components/fractalz-modal";
import {useRef, useState} from "react";
import FractalzSlider from "../../components/fractalz-slider";

const Mint: NextPage = () => {

    const [isModalHidden,setModalHidden] = useState(true)

    const [sliderState,setSliderState] = useState({ values: [1] })

    const [isHailing,setHailing] = useState(false)

    const [isConfirmed,setConfirmed] = useState(false)

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
                            Legends tell of ancient stones, known as Waystones, that were used to call Fractalz from across the Cosmos.
                        </p>
                    </div>
                    <div className={"flex justify-center md:justify-end"}>
                        <p className={"max-w-xl text-lg text-center md:text-right"}>
                            Could this Shard you possess be the key to hailing them?
                        </p>
                    </div>
                    <div className={"flex grow justify-center md:justify-end pb-20 md:pb-0"}>
                        <div className={"self-end text-right text-2xl font-['redress']"}>
                            <div className={"mb-4"}>
                                With Waystone: 0.03 <i className="fa-brands fa-ethereum"/> || No Waystone: 0.06 <i className="fa-brands fa-ethereum"/>
                            </div>
                            <div className={"mb-4"}>
                                5 Fractalz per Waystone
                            </div>
                            <div className={"mb-4"}>
                                Fractalz Breached: X,XXX
                            </div>
                            <div className={"mb-4"}>
                                Est. Portal Closing: XX:XX:XX
                            </div>
                            <FractalzLink
                                onClick={()=>{setModalHidden(false)}}
                                type={'action'}
                            >
                                activate waystone
                            </FractalzLink>
                        </div>
                    </div>
                </motion.div>
                <FractalzModal
                    isHidden={isModalHidden}
                    setHidden={setModalHidden}
                >
                    <AnimatePresence>
                        {!isHailing && <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className={"px-3"}>
                                How many do you wish to hail?
                            </div>
                            <div className={"pt-3 text-2xl px-16 font-['comic-runes','cursive']"}>
                                {sliderState && sliderState.values[0]}
                            </div>
                            <div className={"pt-8 px-12"}>
                                <FractalzSlider sliderState={sliderState} setSliderState={setSliderState}/>
                            </div>
                            <div className={"pt-8"}>
                                <FractalzLink onClick={()=>{setHailing(true)}} type={'button'}>
                                    <div className={"border border-white rounded-full px-4 py-1"}>
                                        HAIL
                                    </div>
                                </FractalzLink>
                            </div>
                        </motion.div>}
                    </AnimatePresence>
                    <AnimatePresence>
                        {isHailing && <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 1,
                            }}
                            onAnimationComplete={
                                ()=>{
                                    setConfirmed(true)
                                }
                            }
                            exit={{ opacity: 0 }}
                        >
                            <div className={"pb-3 font-bold tracking-widest"}>
                                A.T.L.A.S.:
                            </div>
                            {isConfirmed && <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 3
                                }}
                                exit={{ opacity: 0 }}
                                className={"pb-3 px-4"}
                            >
                                Waystone Activated & Aether Accepted.…
                            </motion.div>}
                            {isConfirmed && <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 6
                                }}
                                exit={{ opacity: 0 }}
                                className={"pb-3 px-4"}
                            >
                                Waybridge now attempting to call
                                through the portal.…
                            </motion.div>}
                            {isConfirmed && <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 6
                                }}
                                exit={{ opacity: 0 }}
                                className={"px-4"}
                            >
                                Follow their progress <FractalzLink type={"a"} href={"https://etherscan.io"} rel={"noreferrer"} target={"_blank"}>here</FractalzLink>
                            </motion.div>}
                        </motion.div>}
                    </AnimatePresence>
                </FractalzModal>
            </section>
        </FractalzPage>
    )
}

export default Mint
