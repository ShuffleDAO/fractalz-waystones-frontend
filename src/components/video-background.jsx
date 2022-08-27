import React from "react";

export default function VideoBackground(props) {
  const { videoSrc } = props
  return (
    <div className="video-wrapper">
      <video playsInline={true} autoPlay={true} muted={true} loop={true}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}