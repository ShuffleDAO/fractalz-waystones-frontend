import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import FractalzLink from "./fractalz-link";

export default function FractalzModal(props: {isHidden: boolean,setHidden: any,children:any, locked?: boolean, zIndex?: number, image?: string}){
    return (
        <AnimatePresence>
            {!props.isHidden && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={()=>{}}
                className={"fixed min-w-full min-h-screen top-0 left-0 grid flex justify-center bg-[rgba(0,0,0,0.5)] "+(props.isHidden?'hidden ':'')+(props.zIndex?`z-${props.zIndex}`:'z-30')}
            >
                <div onClick={(e)=>{e.stopPropagation()}} className={"absolute top-1/2 left-1/2 translate -translate-y-1/2 -translate-x-1/2 "+(props.isHidden?'hidden':'')}>
                    <div className={"transition-height w-[350px] text-center pt-16 px-6 bg-clip-padding "+(props.image?'bg-modal-success bg-[length:auto_100%]':'bg-modal-default bg-[length:420px_auto] bg-center')+" bg-no-repeat border-glow-blue"}>
                        <AnimatePresence>
                            {!props.locked && <motion.div
                                className={"absolute top-4 right-5"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <FractalzLink type={'button'} onClick={()=>{
                                    if(!props.locked){
                                        props.setHidden(true)
                                    }
                                }}>
                                    <i className="fa-solid fa-x"/>
                                </FractalzLink>
                            </motion.div>}
                        </AnimatePresence>
                        <div className={"underline underline-offset-4 absolute top-4 left-1/2 transform -translate-x-1/2 text-xl font-bold tracking-widest"}>
                            A.T.L.A.S:
                        </div>
                        {props.children}
                    </div>
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}
