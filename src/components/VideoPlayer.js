import ReactPlayer from 'react-player';
import React, { useRef } from 'react';

const VideoPlayer = (props) => {
    const playerRef = useRef(null);
    return (
        <div>
            <ReactPlayer ref={playerRef}
                         width="100%"
                         height="100%"
                         url={props.video}
                         controls={true} />
        </div>
    )
};

export default VideoPlayer;