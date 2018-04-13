import React from 'react';

const VideoListItem = ({video}) => {
// turning (props) to ({video}) is like
// defining below: const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  console.log(imageUrl);
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading"></div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
