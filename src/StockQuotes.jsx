import React, {Component} from 'react';
import StockFetcher from './StockFetcher.jsx'

class StockQuotes extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            prices: 0,
            dailyFluctuations: []
        };
    }

    componentDidMount() {
        this.fetchStocks(stocks => {
            this.setState({prices: stocks});
        })
    }

    render() {
        return (
            <div>
                <h4>{this.state.prices}</h4>
            </div>
        )
    }

    fetchStocks(callback) {
        StockFetcher.fetch(callback)
    }

}

export default StockQuotes