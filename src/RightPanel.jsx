import React, {Component} from 'react'
import Clock from './Clock.jsx';

class RightPanel extends Component {
    render() {
        return (
            <div className="RightPanel"> 
            <Clock />
            </div>
        )
    }
}

export default RightPanel;