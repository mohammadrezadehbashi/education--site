// import "node_modules/video-react/dist/video-react.css";
import "../../../node_modules/video-react/dist/video-react.css";

import React from 'react';
import { Player } from 'video-react';

export default VideoPlayer => {
  return (
    <Player
      // playsInline
      // poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      fluid={false}
      width="auto"
      height={475}
    />
  );
};