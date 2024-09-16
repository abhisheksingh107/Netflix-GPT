import React from "react";
import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer"

const VideoTrailer = ({ movieId }) => {
  // make an Api to fecth the trailer for the movie and updating the store with trailer video data

  const trailerYouTube = useSelector((store) => store.addTrailervideo);

  useVideoTrailer(movieId);

  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/Icnysn53neU?si=" + trailerYouTube?.key + "&start=4&autoplay=1&mute=1&controls=0&modestbranding=2&rel=0"
        }
        frameborder="0"
      ></iframe>
    </div>
  );    
};

export default VideoTrailer;