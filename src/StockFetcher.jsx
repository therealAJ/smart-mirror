import axios from 'axios';

export default class StockFetcher {

    static fetch(callback) {
        const STOCK_URL = 'http://finance.google.com/finance/info?client=ig&q=NASDAQ%3AAAPL';
        console.log(STOCK_URL);

        axios
            .get(STOCK_URL)
            .then(function (response) {
                var str = response.data;
                var str1 = str.replace("//", "");
                var json = JSON.parse(str1);
                console.log(json[0].l);
                callback(json[0].l);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}