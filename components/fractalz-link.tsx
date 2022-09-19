import Image from "next/image";
import {motion, useTime, useTransform} from "framer-motion";
import {useRouter} from "next/router";

export default function FractalzLink(props: { href?: string, target?: string, rel?: string, children: any, type?: 'a'|'link'|'button'|'action', onClick?: any, disabled?: boolean }){
    const router = useRouter()
    if(props.type==='link'){
        return(
            <motion.div
                onClick={()=>{props.onClick ? props.onClick() : router.push(props.href!)}}
                className={"cursor-pointer"}
                whileHover={{
                    scale: 1.1,
                    opacity: 0.5,
                    transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                whileTap={{ scale: 1.05 }}
            >
                {props.children}
            </motion.div>
        )
    }else if(props.type==='button'||props.type==='action'){
        return(
            <motion.button
                disabled={props.disabled}
                onClick={()=>{
                    if(!props.disabled){
                        props.onClick ? props.onClick() : router.push(props.href!)
                    }
                }}
                className={"cursor-pointer"+(props.type==='action'?' font-[\'redress\'] text-4xl pt-2 pb-4 mb-4 px-8 border-glow rounded-full':'')+(props.disabled ? ' opacity-50' : '')}
                whileHover={{
                    scale: 1.1,
                    opacity: 0.5,
                    transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                whileTap={{ scale: 1.05 }}
            >
                {props.children}
            </motion.button>
        )
    }else{
        return(
            <motion.a
                whileHover={{
                    scale: 1.1,
                    opacity: 0.5,
                    transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                href={props.href} target={props.target} rel={props.rel}>
                {props.children}
            </motion.a>
        )
    }
}
