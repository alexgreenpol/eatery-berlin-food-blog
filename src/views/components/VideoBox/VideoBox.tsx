import { FC, useEffect, useState } from "react";
import Button from "../Button/Button";
import "./VideoBox.scss";

type VideoBoxProps = {
    poster: string;
    videoTitle: string;
    videoUrl: string;
};

const VideoBox: FC<VideoBoxProps> = ({ poster, videoTitle, videoUrl }) => {
    const [showPoster, setShowPoster] = useState(true);

    const PlayVideoHandler = () => {
        setShowPoster(false);
    };

    return (
        <div className="videobox">
            {showPoster && (
                <div className="videobox__poster">
                    <img src={poster} alt="" />
                    <Button onClick={PlayVideoHandler}>Play video</Button>
                    <span className="overlay"></span>
                </div>
            )}
            <div className="videobox__video">
                <iframe
                    title={videoTitle}
                    src={`${videoUrl}${!showPoster ? "?autoplay=1" : ""}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoBox;
