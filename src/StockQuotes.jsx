import React, {Component} from 'react';
import StockFetcher from './StockFetcher.jsx'

class StockQuotes extends Component {

    constructor() {
        super();
        this.state = {
            stocks: []
        };
    }

    componentDidMount() {
        this.fetchStocks(stocks => {
            this.setState({stocks});
        })
    }

    render() {
        return (
            <div>
                <ul> 
                    {this.state.stocks.map(stock => {
                        return (
                            <table>
                                <tbody>
                                    <tr><td>{stock.t}</td><td>{stock.l}</td><td>{stock.c}</td></tr>
                                </tbody>
                            </table>
                        )
                    })}
                </ul>
            </div>
        )
    }

    fetchStocks(callback) {
        StockFetcher.fetch(callback)
    }
}

export default StockQuotes