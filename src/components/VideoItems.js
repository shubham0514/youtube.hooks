import VideoItem from './VideoItem.css';
import React from 'react';

const VideoItems = ({video ,onVideoSelect}) =>{
return(
 <div onClick={() => onVideoSelect(video)} className="video-item item">
    <div className="content">
<img className ="ui image" src ={video.snippet.thumbnails.medium.url} />
    </div>
     <div className= "description">
        <div className="header">
     {video.snippet.title}</div>
    </div>
 </div>
);

};

export default VideoItems;