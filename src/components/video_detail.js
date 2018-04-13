import React from "react";

const VideoDetail = (props) => {
  console.log(props);
  const url = `https://www.youtube.com/embed/`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
      </div>
    </div>
  );
};

export default VideoDetail;
