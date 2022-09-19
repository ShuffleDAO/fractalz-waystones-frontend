import type {NextPage} from 'next'
import FractalzPage from "../../components/fractalz-page";
import {AnimatePresence, motion, useTime, useTransform} from "framer-motion";
import FractalzLink from "../../components/fractalz-link";
import FractalzModal from "../../components/fractalz-modal";
import {useState} from "react";
import FractalzSlider from "../../components/fractalz-slider";
import {Genesis, Genesis__factory, Mock1155__factory} from "../../typechain-types";
import {useAccount, useContract, useContractRead, useSigner, useWaitForTransaction} from "wagmi";
import {BigNumber, BigNumberish, ethers} from "ethers";

const Mint: NextPage = () => {

    const GENESIS = '0x38293814030682Ef3469CE162fA8D461188ed835'

    const [state, setState] = useState({} as Genesis.ContractStateStruct)

    const [fractalz, setFractalz] = useState(0)

    const [waystones, setWaystones] = useState(0)

    const [allowance, setAllowance] = useState(0)

    const {data: signer} = useSigner();

    const contract: Genesis = useContract({
        addressOrName: GENESIS,
        contractInterface: Genesis__factory.createInterface(),
        signerOrProvider: signer
    })

    useContractRead({
        addressOrName: GENESIS,
        contractInterface: Genesis__factory.createInterface(),
        functionName: 'state',
        watch: true,
        onSuccess: (res) => {
            setState(res as unknown as Genesis.ContractStateStruct)
        }
    })

    useContractRead({
        addressOrName: GENESIS,
        contractInterface: Genesis__factory.createInterface(),
        functionName: 'balanceOf',
        args: [useAccount().address],
        watch: true,
        onSuccess: (res) => {
            setFractalz(res.toNumber())
        }
    })

    useContractRead({
        addressOrName: '0x14A4c6fE5ac1D6fBE2AA561841d0ba35235f0438',
        contractInterface: Mock1155__factory.createInterface(),
        functionName: 'balanceOf',
        args: [useAccount().address, 1],
        watch: true,
        onSuccess: (res) => {
            setWaystones(res.toNumber())
        }
    })

    useContractRead({
        addressOrName: GENESIS,
        contractInterface: Genesis__factory.createInterface(),
        functionName: 'fractalzAllowance',
        args: [useAccount().address, waystones],
        watch: true,
        onSuccess: (res) => {
            setAllowance(res.toNumber())
        }
    })

    const [isModalHidden, setModalHidden] = useState(true)

    const [isBonusModalHidden, setBonusModalHidden] = useState(true)

    const [sliderState, setSliderState] = useState({values: [1]})

    const [isAwaitingConf, setAwaitingConf] = useState(false)

    const [isAwaitingTx, setAwaitingTx] = useState(false);

    const [txHash, setTxHash] = useState('');

    const [isSuccessful, setSuccessful] = useState(false);

    const [isError, setError] = useState('false')

    const {data: txStatus, isError: txError, isLoading} = useWaitForTransaction({
        hash: txHash,
        confirmations: 2,
        enabled: isAwaitingTx,
        onSuccess: (res) => {
            setSuccessful(true)
        },
        onSettled: (res) => {
            setAwaitingTx(false)
            console.log('fin', res)
        }
    })

    const time = useTime()
    const blink = useTransform(
        time,
        [0, 1000],
        [0, 1],
        {clamp: false}
    )

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
                            Legends tell of ancient stones, known as Waystones, that were used to call Fractalz from
                            across the Cosmos.
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
                                With
                                Waystone: {ethers.utils.formatEther(state.mintConfig.waystonePrice as BigNumberish)} <i
                                className="fa-brands fa-ethereum"/> || No
                                Waystone: {ethers.utils.formatEther(state.mintConfig.price as BigNumberish)} <i
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
                {state.mintConfig && <><FractalzModal
                    isHidden={isModalHidden && !isAwaitingTx}
                    setHidden={setModalHidden}
                    locked={isAwaitingConf || isAwaitingTx}
                >
                    <AnimatePresence>
                        {!isAwaitingTx && <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
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
                                <span
                                    className={"border border-white pb-3 px-3 font-['comic-runes','cursive']"}>{sliderState && sliderState.values[0]}</span>
                                <span
                                    className={"border border-white px-3 self-stretch text-center flex flex-row font-mono"}>
                                    <span className={"self-center"}>
                                        {state.mintConfig && ethers.utils.formatEther((state.mintConfig.waystonePrice as BigNumber).mul(sliderState.values[0]))}
                                        <i className="fa-brands fa-ethereum"/>
                                    </span>
                                </span>
                            </div>}
                            {allowance > 0 && <div className={"pt-8 px-12"}>
                                <FractalzSlider min={1} max={allowance} sliderState={sliderState}
                                                setSliderState={setSliderState}/>
                            </div>}
                            <div className={"pt-8 pb-5 flex flex-row justify-around"}>
                                <FractalzLink disabled={isAwaitingConf || isAwaitingTx} onClick={async () => {
                                    setAwaitingConf(true);
                                    contract.mint(sliderState.values[0], false, {
                                        value: (state.mintConfig.waystonePrice as BigNumber).mul(sliderState.values[0])
                                    }).then(res => {
                                        setModalHidden(true)
                                        setTxHash(res.hash);
                                        setAwaitingTx(true);
                                        setAwaitingConf(false);
                                        console.log(res);
                                    }).catch(e => {
                                        setAwaitingConf(false);
                                        console.error(e);
                                    });
                                }} type={'button'}>
                                    <div className={"border border-white rounded-full px-4 py-1 tracking-widest"}>
                                        HAIL
                                    </div>
                                </FractalzLink>
                                {sliderState.values[0] > 1 && <FractalzLink onClick={() => {
                                    setBonusModalHidden(false);
                                }} type={'button'}>
                                    <div className={"border border-white rounded-full px-4 py-1 tracking-widest"}>
                                        Boost...?
                                    </div>
                                </FractalzLink>}
                            </div>
                        </motion.div>}
                    </AnimatePresence>
                    <AnimatePresence>
                        {isAwaitingConf && !isAwaitingTx && <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className={"pb-6"}
                        >
                            Waiting for confirmation...
                        </motion.div>}
                    </AnimatePresence>
                </FractalzModal><FractalzModal
                    locked={isAwaitingConf || isAwaitingTx}
                    isHidden={isBonusModalHidden}
                    setHidden={setBonusModalHidden}
                    zIndex={40}
                >
                    <div className={"px-3 pb-3"}>
                        The Archon Scholars have found a way to boost the Waybridge’s power...
                    </div>
                    <div className={"px-3 pb-3"}>
                        This boost is suspected to help the Waybridge to Hail even more Fractalz...
                    </div>
                    <div className={"px-3 pb-3"}>
                        But, it requires more Aether & is not a sure thing...
                    </div>
                    <div className={"px-3 pb-3"}>
                        Boosting is limited to those hailing multiple Fractalz.
                    </div>
                    <div className={"px-3 pb-3"}>
                        The ONLY additional cost
                        is {ethers.utils.formatEther(state.mintConfig.bonusPrice as BigNumber)} Aether (per tx).
                    </div>
                    <div className={"px-3 pb-3"}>
                        The more Waystones held, the more favorable the odds.
                    </div>
                    <div className={"px-1 pb-5"}>
                        Will you boost, Legion?
                    </div>
                    <div className={"text-red-400 font-bold text-sm pb-6"}>
                        Warning: The extra {ethers.utils.formatEther(state.mintConfig.bonusPrice as BigNumber)} Aether
                        spent may have no effect & be lost.
                    </div>
                    <div className={"flex flex-row justify-around px-5 pb-6"}>
                        <FractalzLink disabled={isAwaitingConf} onClick={async () => {
                            setAwaitingConf(true);
                            contract.mint(sliderState.values[0], true, {
                                value: (state.mintConfig.waystonePrice as BigNumber).mul(sliderState.values[0]).add(state.mintConfig.bonusPrice as BigNumber)
                            }).then(res => {
                                setModalHidden(true)
                                setBonusModalHidden(true)
                                setTxHash(res.hash);
                                setAwaitingTx(true);
                                setAwaitingConf(false);
                                console.log(res);
                            }).catch(e => {
                                setAwaitingConf(false);
                                console.error(e);
                            });
                        }} type={'button'}>
                            <div className={"border border-white rounded-full px-4 py-1 tracking-widest"}>
                                Yes
                            </div>
                        </FractalzLink>
                        <FractalzLink disabled={isAwaitingConf} onClick={() => {
                            setBonusModalHidden(true);
                        }} type={'button'}>
                            <div className={"border border-white rounded-full px-4 py-1 tracking-widest"}>
                                No
                            </div>
                        </FractalzLink>
                    </div>
                    <AnimatePresence>
                        {isAwaitingConf && !isAwaitingTx && <motion.div
                            style={{opacity: blink}}
                            className={"pb-6"}
                        >
                            Waiting for confirmation...
                        </motion.div>}
                    </AnimatePresence>
                </FractalzModal>
                    <FractalzModal isHidden={!isAwaitingTx} setHidden={setAwaitingTx} locked={true}>
                        <div className={"px-4 pt-4 pb-8"}>
                            Waystones Activated & Aether Accepted.…
                        </div>
                        <div className={"px-4 pb-12"}>
                            Waybridge now attempting to hail
                            through the portal...
                        </div>
                        <FractalzLink type={"a"} href={`https://sepolia.etherscan.io/tx/${txHash}`} target={"_blank"}
                                      rel={"noreferrer"}>
                            <button className={"border border0white px-3 py-1 mb-6"}>
                                Follow progress... <i className="fa-light fa-arrow-up-right-from-square"/>
                            </button>
                        </FractalzLink>
                    </FractalzModal>
                    <FractalzModal image={'success'} isHidden={!isSuccessful} setHidden={()=>{
                        setSuccessful(false)
                    }}>
                        <div className={"px-4 pt-4 pb-8"}>
                            Congratulations, Legion!
                        </div>
                        <div className={"px-4 pb-6"}>
                            {txStatus && txStatus.logs.length-1} Fractalz breached the portal...
                        </div>
                        <div className={"px-4 pb-6"}>
                            Traveling in different directions...
                        </div>
                        <div className={"px-4 pb-6"}>
                            At shooting-star levels of velocity...
                        </div>
                        <div className={"px-4 pb-6"}>
                            Station instruments unable to track...
                        </div>
                        <div className={"px-4 pb-6"}>
                            Systems registering unusual biometric data...
                        </div>
                        <div className={"px-4 pb-8"}>
                            Report to medbay, Legion...
                        </div>
                    </FractalzModal>
                </>}
            </section>
        </FractalzPage>
    )
}

export default Mint
