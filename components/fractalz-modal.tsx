import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import FractalzLink from "./fractalz-link";

export default function FractalzModal(props: {isHidden: boolean,setHidden: any,children:any}){
    return (
        <AnimatePresence>
            {!props.isHidden && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={()=>{props.setHidden(true)}}
                className={"fixed z-30 min-w-full min-h-screen top-0 left-0 grid flex justify-center bg-[rgba(0,0,0,0.5)] "+(props.isHidden?'hidden':'')}
            >
                <div onClick={(e)=>{e.stopPropagation()}} className={"absolute top-1/2 left-1/2 translate -translate-y-1/2 -translate-x-1/2 "+(props.isHidden?'hidden':'')}>
                    <div className={"h-[350px] w-[350px] text-center pt-20 px-12 bg-[url('/assets/Modal.png')] bg-cover bg-no-repeat bg-center"}>
                        <div className={"absolute top-10 right-[55px]"}>
                            <FractalzLink type={'button'} onClick={()=>{props.setHidden(true)}}>
                                <i className="fa-solid fa-x"/>
                            </FractalzLink>
                        </div>
                        {props.children}
                    </div>
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}
