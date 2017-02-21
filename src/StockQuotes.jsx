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
                            <table key={stock.id}>
                                <tbody className='stock-table-body'>
                                    <tr><td className='stock-table-row'>{stock.t}</td><td className='stock-table-row'>{stock.l}</td><td className='stock-table-row'>{stock.c}</td></tr>
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