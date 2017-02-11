import React, {Component} from 'react';
import Clock from './Clock.jsx';
import StockQuotes from './StockQuotes.jsx';

class LeftPanel extends Component {
    render() {
        return (
            <div className="LeftPanel">
            <Clock />
            <StockQuotes />
            </div> 
        )
    }
}

export default LeftPanel;