import React from "react";

export default function VideoBackground(props) {
  const { mp4Src, webmSrc, poster } = props
  return (
    <div className="video-wrapper">
      <video poster={poster} playsInline={true} autoPlay={true} muted={true} loop={true}>
        {mp4Src && <source src={mp4Src} type="video/mp4" />}
        {webmSrc && <source src={webmSrc} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}