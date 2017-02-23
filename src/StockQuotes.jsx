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
            this.updateStockCssClasses();
        })
    }

    render() {
        return (
            <div className='stock-table-body'>
                 <table className='st'>
                    <tbody>
                         {this.state.stocks.map(stock => {
                            return (
                                <tr className='str'><td className='stc'>{stock.t}</td><td className='stc'>${stock.l}</td><td className='stc' id={stock.t}>{stock.c}</td></tr>
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

    updateStockCssClasses() {
        const stocks = this.state.stocks;
        stocks.forEach((stock) => {
            let stockSign = stock.c.split('')[0];
            if (stockSign == '+') {
              $('#' + stock.t).append("<div id='arrow-up'></div>");
            }
            if (stockSign == '-') {
              $('#' + stock.t).append("<div id='arrow-down'></div>");
            }
        });
    }

}

export default StockQuotes