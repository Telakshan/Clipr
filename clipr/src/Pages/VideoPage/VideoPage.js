import React from 'react';
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';
import Comment from '../../Components/Comment/Comment';
import'./VideoPage.scss';

const VideoPage = () => {
    return (
        <div className='video-page'>

            <VideoPlayer/>

            <Comment className='comments'/>
            
        </div>
    )
}

export default VideoPage
