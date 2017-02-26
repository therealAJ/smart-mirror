import React, {Component} from 'react';
import VideoListItem from './VideoListItem.jsx';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const videoListArray = this.props.videos.slice(0,3).map(video => {
            return <VideoListItem key={video.etag} video={video} />
        })

        return (
            <ul className='container video-list'>
                {videoListArray}
            </ul>
        );
    }
}

export default VideoList;