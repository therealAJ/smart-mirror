import { createFetch, base, accept, parse } from 'http-client';

export default class StockFetcher {

    static fetch(tick) {
        const fetch = createFetch(
            base('http://dev.markitondemand.com/MODApis/Api/v2'),
            accept('application/json'),
            parse('json')
        )


        fetch('/Quote/jsonp?symbol='+tick).then(response => {
            console.log(response.jsonData)
            return response;
        })
    }
}