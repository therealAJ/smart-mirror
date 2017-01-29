import React, {Component} from 'react';
import StockFetcher from './StockFetcher.jsx';

class StockQuotes extends Component {
    
    constructor() {
        super();
        this.state = {
            price: {
                val: 0
            }
        };
    }

    componentDidMount() {
        this.fetchStocks(price => {
            this.setState({
                price
            })
        });
    }

    render() {
        const cost = this.state.price.val;

        return (
            <div>
                {cost}
            </div>
        )
    }

    fetchStocks(){
        StockFetcher.fetchStocks("APPL");
    }

}

export default StockQuotes