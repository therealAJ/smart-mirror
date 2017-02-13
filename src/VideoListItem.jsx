import React, {Component} from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    
    
    
    render() {
        const imageUrl = this.props.video.snippet.thumbnails.default.url;
        const videoId = this.props.video.id.videoId; 
        const url = `https://www.youtube.com/embed/${videoId}`;
        
        return (
            <li>
                <div>{this.props.video.snippet.title}</div>
                <div><img src={imageUrl}/></div>
                <iframe type="text/html" src={url}></iframe>
            </li>
        );
    }
}

export default VideoListItem;