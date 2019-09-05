import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onVideoSelect }) => {
    console.log(videos);
    const rederedList = videos.map((video, index) => {
        return <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />;
    });
    return (
        <div className="ui relaxed divided list">
            {rederedList}
        </div>
    )
};

export default VideoList;