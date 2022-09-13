import Image from "next/image";
import ConnectButton from "./connect-button";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import FractalzLink from "./fractalz-link";

export default function Navigation(props: any){

    const { audioFile } = props;
    const audioPlayer = useRef(null);
    const [audioMuted, setAudioMuted] = useState(false);
    const [busy, setBusy] = useState(false);
    const router = useRouter()

    const toggleAudioState = async () => {
        window.localStorage.setItem('fractalzMuted',String(!audioMuted))
        await setAudioState(!audioMuted)
    };

    const setAudioState = async (m: boolean) => {
        if(busy){
            return
        }
        setBusy(true)
        try{
            const player: HTMLAudioElement = audioPlayer.current as unknown as HTMLAudioElement
            if(player){
                if (!m) {
                    player.volume = 0.2;
                    await player.play();
                    setAudioMuted(false);
                } else {
                    player.pause();
                    setAudioMuted(true);
                }
            }
            setBusy(false)
        }catch(e: any){
            setBusy(false)
            setTimeout(()=>{
                setAudioState(m)
            },1000)
            console.error(e)
        }
    };

    useEffect(() => {
        setAudioState(window.localStorage.getItem('fractalzMuted')==='true')
    }, [])

    return (
        <nav className={"absolute w-full z-40 flex flex-wrap flex-col md:flex-row md:justify-between justify-center md:px-10 pt-5"}>
            <div className={"max-w-[300px] self-center"}>
                <FractalzLink href={"/"} type={'link'}>
                    <Image
                        alt="FRACTALZ"
                        src="/assets/fractalz-logo.png"
                        height={280}
                        width={1280}
                    />
                </FractalzLink>
            </div>
            <div className={"self-center grow flex justify-end"}>
                <ConnectButton/>
            </div>
            <div className={"self-center p-3 text-lg grow-0"}>
                <FractalzLink onClick={toggleAudioState} type={'button'}>
                    <div className={`${!audioMuted?'block':'hidden'}`}><i className="fa-solid fa-volume"/></div>
                    <div className={`${audioMuted?'block':'hidden'}`}><i className="fa-solid fa-volume-xmark"/></div>
                </FractalzLink>
            </div>
            <audio loop autoPlay muted={audioMuted} ref={audioPlayer} src={audioFile}/>
        </nav>
    )
}
