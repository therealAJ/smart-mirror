import axios from 'axios';

export default class StockFetcher {

    static fetch(callback) {
        const tickers = 'AAPL,GOOGL,NFLX,TSLA';
        const STOCK_URL = `http://finance.google.com/finance/info?client=ig&q=NASDAQ%3A${tickers}`;

        axios
            .get(STOCK_URL)
            .then(response => {
                let data = response.data.replace("//", "");
                let json = JSON.parse(data);
                callback(json);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}