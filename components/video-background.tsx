export default function VideoBackground(props: { mp4Src?: any; webmSrc?: any; poster: any; offset?: any; }) {
    const { mp4Src, webmSrc, poster } = props
    return (
        <div className={"fixed top-0"}>
            <div className={"video-background absolute h-screen w-screen overflow-hidden z-0"}>
                <video  className={"absolute transform left-1/2 top-1/2 -translate-y-1/2 min-h-screen min-w-none xl:min-w-full "+(props.offset || '-translate-x-1/2')} poster={poster} playsInline={true} autoPlay={true} muted={true} loop={true}>
                    {mp4Src && <source src={mp4Src} type="video/mp4" />}
                    {webmSrc && <source src={webmSrc} type="video/webm" />}
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
