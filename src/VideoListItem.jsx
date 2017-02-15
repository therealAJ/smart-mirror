import React, {Component} from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }
     
    render() {
        const videoId = this.props.video.id.videoId; 
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <li>
                <iframe type="text/html" src={url}></iframe>
            </li>
        );
    }
}

export default VideoListItem;