import React, {Component} from 'react'
import Clock from './Clock.jsx';
import StockQuotes from './StockQuotes.jsx';

class RightPanel extends Component {
    render() {
        return (
            <div className="RightPanel"> 
            <Clock />
            <StockQuotes />
            </div>
        )
    }
}

export default RightPanel;