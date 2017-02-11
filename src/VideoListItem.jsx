import React, {Component} from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return (
            <li>
                <div>{this.props.video.snippet.title}</div>
            </li>
        );
    }
}

export default VideoListItem;