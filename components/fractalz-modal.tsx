import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import FractalzLink from "./fractalz-link";

export default function FractalzModal(props: {isHidden: boolean,setHidden: any,children:any, locked?: boolean}){
    return (
        <AnimatePresence>
            {!props.isHidden && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={()=>{}}
                className={"fixed z-30 min-w-full min-h-screen top-0 left-0 grid flex justify-center bg-[rgba(0,0,0,0.5)] "+(props.isHidden?'hidden':'')}
            >
                <div onClick={(e)=>{e.stopPropagation()}} className={"absolute top-1/2 left-1/2 translate -translate-y-1/2 -translate-x-1/2 "+(props.isHidden?'hidden':'')}>
                    <div className={"transition-height min-h-[350px] w-[350px] text-center pt-16 px-12 bg-[url('/assets/modalbg.png')] bg-cover bg-no-repeat bg-center"}>
                        <AnimatePresence>
                            {!props.locked && <motion.div
                                className={"absolute top-3 right-11"}
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
                        <div className={"underline underline-offset-4 absolute top-3 left-1/2 transform -translate-x-1/2 text-xl font-bold tracking-widest"}>
                            A.T.L.A.S:
                        </div>
                        {props.children}
                    </div>
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}
