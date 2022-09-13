import Link from 'next/link'
import Head from "next/head";
import Script from "next/script";
import ConnectButton from "./connect-button";

export default function Header() {
    return (
        <>
            <Head>
                <title>Fractalz</title>
            </Head>
            <Script src={"https://kit.fontawesome.com/e5bcd6541d.js"} crossOrigin="anonymous"/>
        </>
    )
}
