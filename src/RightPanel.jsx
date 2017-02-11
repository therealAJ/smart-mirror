import React, {Component} from 'react'
import YoutubeContainer from './YoutubeContainer.jsx';



class RightPanel extends Component {
    render() {
        return (
            <div className="RightPanel"> 
            <YoutubeContainer />
            </div>
        )
    }
}

export default RightPanel;