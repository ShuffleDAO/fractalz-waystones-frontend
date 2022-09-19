import Head from "next/head";
import Script from "next/script";

export default function Header(props: {path?: string}) {
    return (
        <>
            <Head>
                <meta property="og:url" content={"https://www.fractalz.io/"+(props.path?props.path:'')}/>
                <meta property="twitter:url" content={"https://www.fractalz.io/"+(props.path?props.path:'')}/>
                <title>Fractalz{props.path?': '+props.path.toUpperCase():''}</title>
            </Head>
            <Script src={"https://kit.fontawesome.com/e5bcd6541d.js"} crossOrigin="anonymous"/>
        </>
    )
}
