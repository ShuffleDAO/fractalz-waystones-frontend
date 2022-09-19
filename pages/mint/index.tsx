import type {NextPage} from 'next'
import FractalzPage from "../../components/fractalz-page";
import {AnimatePresence, motion} from "framer-motion";
import FractalzLink from "../../components/fractalz-link";
import FractalzModal from "../../components/fractalz-modal";
import {useEffect, useState} from "react";
import FractalzSlider from "../../components/fractalz-slider";
import {Genesis, Genesis__factory, Mock1155__factory} from "../../typechain-types";
import {
    useAccount,
    useContract,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useProvider,
    useSigner, useWaitForTransaction
} from "wagmi";
import {getProvider} from "@wagmi/core";
import {BigNumberish, ethers} from "ethers";

const Mint: NextPage = () => {

    const [state, setState] = useState({} as Genesis.ContractStateStruct)

    const [waystones, setWaystones] = useState(0)

    const [allowance, setAllowance] = useState(0)

    const { data: signer } = useSigner();

    const contract: Genesis = useContract({
        addressOrName: '0x062ED5C1a781685032d5a9f3BA189F6742cB4e04',
        contractInterface: Genesis__factory.createInterface(),
        signerOrProvider: signer
    })

    useContractRead({
        addressOrName: '0x062ED5C1a781685032d5a9f3BA189F6742cB4e04',
        contractInterface: Genesis__factory.createInterface(),
        functionName: 'state',
        watch: true,
        onSuccess: (res) => {
            setState(res as unknown as Genesis.ContractStateStruct)
        }
    })

    useContractRead({
        addressOrName: '0x14A4c6fE5ac1D6fBE2AA561841d0ba35235f0438',
        contractInterface: Mock1155__factory.createInterface(),
        functionName: 'balanceOf',
        args: [useAccount().address,1],
        watch: true,
        onSuccess: (res) => {
            setWaystones(res.toNumber())
        }
    })

    useContractRead({
        addressOrName: '0x062ED5C1a781685032d5a9f3BA189F6742cB4e04',
        contractInterface: Genesis__factory.createInterface(),
        functionName: 'fractalzAllowance',
        args: [useAccount().address,waystones],
        watch: true,
        onSuccess: (res) => {
            setAllowance(res.toNumber())
        }
    })

    const [isModalHidden,setModalHidden] = useState(true)

    const [sliderState,setSliderState] = useState({ values: [1] })

    const [isAwaitingConf,setAwaitingConf] = useState(false)

    const [isAwaitingTx,setAwaitingTx] = useState(false);

    const [txHash,setTxHash] = useState('');

    const { data: txStatus, isError, isLoading } = useWaitForTransaction({
        hash: txHash,
        confirmations: 2,
        enabled: isAwaitingTx,
        onSettled: (res) => {
            setAwaitingTx(false)
            console.log('fin',res)
        }
    })

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
                    {state.mintConfig && <div className={"flex grow justify-center md:justify-end pb-20 md:pb-0"}>
                        <div className={"self-end text-right text-2xl font-['redress']"}>
                            <div className={"mb-4"}>
                                With Waystone: {ethers.utils.formatEther(state.mintConfig.waystonePrice as BigNumberish)} <i className="fa-brands fa-ethereum"/> || No Waystone: {ethers.utils.formatEther(state.mintConfig.price as BigNumberish)} <i
                                className="fa-brands fa-ethereum"/>
                            </div>
                            <div className={"mb-4"}>
                                {state.mintConfig.allowancePerWaystone.toString()} Fractalz per
                                Waystone
                            </div>
                            <div className={"mb-4"}>
                                Fractalz Breached: {state.totalMinted.toString()}
                            </div>
                            {state.closeEpoch > 0 && <div className={"mb-4"}>
                                Est. Portal Closing: XX:XX:XX
                            </div>}
                            <FractalzLink
                                onClick={() => {
                                    setModalHidden(false)
                                }}
                                type={'action'}
                            >
                                activate waystone
                            </FractalzLink>
                        </div>
                    </div>}
                </motion.div>
                <FractalzModal
                    isHidden={isModalHidden}
                    setHidden={setModalHidden}
                    locked={isAwaitingConf || isAwaitingTx}
                >
                    <AnimatePresence>
                        {!isAwaitingTx && <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className={"px-3 pb-5"}>
                                Aether ID connected...
                            </div>
                            <div className={"px-3"}>
                                Waystones placed in the Waybridge:
                            </div>
                            <div className={"pt-3 pb-6 text-xl px-16 font-['comic-runes','cursive']"}>
                                <span className={"border border-white pb-3 px-3 text-center"}>{waystones}</span>
                            </div>
                            {allowance > 0 && <div className={"px-3"}>
                                How many Fractalz will you hail, Legion?
                            </div>}
                            {allowance > 0 && <div className={"pt-4 text-xl flex flex-row justify-center gap-x-3"}>
                                <span className={"border border-white pb-3 px-3 font-['comic-runes','cursive']"}>{sliderState && sliderState.values[0]}</span>
                                <span className={"border border-white px-3 self-stretch text-center flex flex-row font-mono"}>
                                    <span className={"self-center"}>
                                        {state.mintConfig && ethers.utils.formatEther(state.mintConfig.waystonePrice.mul(sliderState.values[0]))} <i className="fa-brands fa-ethereum"/>
                                    </span>
                                </span>
                            </div>}
                            {allowance > 0 && <div className={"pt-8 px-12"}>
                                <FractalzSlider min={1} max={allowance} sliderState={sliderState} setSliderState={setSliderState}/>
                            </div>}
                            <div className={"pt-8 pb-5 flex flex-row justify-around"}>
                                <FractalzLink disabled={isAwaitingConf || isAwaitingTx} onClick={async ()=>{
                                    setAwaitingConf(true)
                                    contract.mint(sliderState.values[0],false,{
                                        value: state.mintConfig.waystonePrice.mul(sliderState.values[0])
                                    }).then(res=>{
                                        setTxHash(res.hash)
                                        setAwaitingTx(true)
                                        setAwaitingConf(false)
                                        console.log(res)
                                    }).catch(e=>{
                                        setAwaitingConf(false)
                                        console.error(e)
                                    })
                                }} type={'button'}>
                                    <div className={"border border-white rounded-full px-4 py-1"}>
                                        HAIL
                                    </div>
                                </FractalzLink>
                                <FractalzLink onClick={()=>{}} type={'button'}>
                                    <div className={"border border-white rounded-full px-4 py-1 font-bold tracking-widest"}>
                                        ????
                                    </div>
                                </FractalzLink>
                            </div>
                        </motion.div>}
                    </AnimatePresence>
                    <AnimatePresence>
                        {isAwaitingConf && !isAwaitingTx && <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={"pb-6"}
                        >
                            Waiting for confirmation...
                        </motion.div>}
                    </AnimatePresence>
                    <AnimatePresence>
                        {!isAwaitingConf && isAwaitingTx && <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={"pb-6"}
                        >
                            {txHash}
                        </motion.div>}
                    </AnimatePresence>
                </FractalzModal>
            </section>
        </FractalzPage>
    )
}

export default Mint
