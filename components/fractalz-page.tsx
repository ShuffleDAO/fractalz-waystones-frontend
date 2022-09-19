import Header from "./header";
import VideoBackground from "./video-background";
import Navigation from "./navigation";
import {motion} from "framer-motion";
import FractalzLink from "./fractalz-link";
import Image from "next/image";

export default function FractalzPage(props: {
    mp4Src:string,
    webmSrc?:string,
    poster: string,
    offset?:string,
    audioFile: string,
    path?: string,
    children: any
}){
    return (
        <>
            <Header path={props.path}/>
            <section>
                <VideoBackground
                    webmSrc={props.webmSrc}
                    mp4Src={props.mp4Src}
                    poster={props.poster}
                    offset={props.offset}/>
            </section>
            <main className={"min-h-screen relative"}>
                <section>
                    <Navigation
                        audioFile={props.audioFile}/>
                </section>
                {props.children}
            </main>
        </>
    )
}
