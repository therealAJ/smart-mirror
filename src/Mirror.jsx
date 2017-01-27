import React, {Component} from 'react';

class Mirror extends Component {
    
    /* componentDidMount() {
        navigator.getUserMedia(
            // constraints
            {video: true, audio: false},
            
            //success callback
            function (mediaStream) {
                let video = document.querySelector("#videoFrame");
                video.src = window.URL.createObjectURL(mediaStream);
            },
            //handle error
            function (error) {
                console.log(error);
            }
        )
    }
    */

    render() {
        return (
            // <div className="Mirror">
            //     <video autoPlay="true" id="videoFrame"></video>
            // </div>
            <div className="Mirror">
            </div>
        );
    }
}

export default Mirror;