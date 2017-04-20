import React from 'react';
import VideoListDetails from './video_details.js';


const VideoListItem = ({video, onVideoSelect}) =>{

	const imgUrl = video.snippet.thumbnails.default.url;

  return  (
  	  
  	<li onClick={ () => onVideoSelect(video) } className="list-group-item">
  	 <div className="video-list media">
  	    <div className="media-left">
          <img className="media-object" scr={ imgUrl } />
  	    </div>
  	    <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
  	    </div>
  	 </div>
    </li>

  )
}


export default VideoListItem;