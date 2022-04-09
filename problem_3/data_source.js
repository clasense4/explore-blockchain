/**
 * Data source utility class.
 * Implement a datasource connector to abstract away data retrieval and manipulation from the View Controllers.
 * You are required to implement a Datasource utility class. How your implementation will be used:
    ```jsx

    ds.getPrices()
        .then(prices => {
            prices.forEach(price => {
                console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
            });
        }).catch(error => {
            console.err(error);
        });
    ```
    Data endpoint: https://static.ngnrs.io/test/prices

1. `Datasource.getPrices()` returns a Promise which provides fulfilment handler with an array of prices retrieved from a remote pricing engine.
2. The remote price data can be retrieved from endpoint above.
3. `price.mid()` returns the mid-point value between `price.buy` and `price.sell`.
4. `price.quote()` returns the quote currency (counter currency) of the trade pair, e.g. for ETHSGD pair the quote currency is SGD.

Expected Output:
Mid price for BTCSGD is 8925.7 SGD.
Mid price for LTCUSD is 65.92 USD.
Mid price for ETHSGD is 509.275 SGD.
Mid price for BCHSGD is 852.29 SGD.
Mid price for LTCSGD is 89.94 SGD.
Mid price for BTCUSD is 6529.6 USD.
Mid price for BCHUSD is 625.58 USD.
Mid price for ETHUSD is 373.555 USD.
 */

const axios = require('axios');

class Datasource {
    getPrices() {
        const divider = 100;
        return new Promise((resolve, reject) => {
            axios.get('https://static.ngnrs.io/test/prices')
                .then(response => {
                    const prices = response.data.data.prices;
                    prices.forEach(price => {
                        price.mid = () => ((price.buy + price.sell) / 2 / divider);
                    });
                    prices.forEach(price => {
                        // assumming the pair suffix is either SGD or USD
                        price.quote = () => price.pair.slice(-3);
                    });
                    resolve(prices);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

const ds = new Datasource();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.log(error);
    });
