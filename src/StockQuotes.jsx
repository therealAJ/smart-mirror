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
            <div className='stock-table-body'>
                 <table className='st'>
                    <tbody>
                         {this.state.stocks.map(stock => {
                            return (
                                <tr><td className='stc'>{stock.t}</td><td className='stc'>{stock.l}</td><td className='stc'>{stock.c}</td></tr>
                            )
                        })}                    
                    </tbody>
                 </table>
            </div>
        )
    }

    fetchStocks(callback) {
        StockFetcher.fetch(callback)
    }
}

export default StockQuotes