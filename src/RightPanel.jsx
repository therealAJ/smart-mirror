import React, {Component} from 'react'
import YoutubeContainer from './YoutubeContainer.jsx';
import Weather from './Weather.jsx'


class RightPanel extends Component {
    render() {
        return (
            <div className="RightPanel"> 
            <Weather />
            <YoutubeContainer />
            </div>
        )
    }
}

export default RightPanel;