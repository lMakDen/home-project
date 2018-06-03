import axios from 'axios';
const SHOW_ELEMENTS = 20;
export const requestCryptoList = () => {
    return function action(dispatch) {
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(function (response) {
                dispatch(requestCryptoListSuccess(response));
                dispatch(requestCryptoPrice(response.data.Data, SHOW_ELEMENTS))
            })
            .catch(function (error) {
                requestCryptoListError(error)
            });
    }
};

export const requestCryptoListSuccess = ( res ) => {
    return {
        type: "REQUEST_CRYPTO_LIST_SUCCESS",
        data: res.data.Data,
    }
};

export const requestCryptoListError = ( error ) => {
    return {
        type: 'REQUEST_CRYPTO_LIST_ERROR',
        error
    };
};

export const requestCryptoPrice = ( res, num) => {

        let cryptoListObject = res ? Object.keys(res) : [];
        let removed = cryptoListObject.slice(num - SHOW_ELEMENTS, num);
        let url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=';
        removed.forEach(function(item, i) {
            url += item + ',';
        });
        url += '&tsyms=USD';
        return function action(dispatch) {
            axios.get(url)
                .then(function (response) {

                    dispatch(requestCryptoPriceSuccess(response))

                })
                .catch(function (error) {
                    requestCryptoPriceError(error)
                });
        }
};

export const requestCryptoPriceSuccess = ( res ) => {
    return {
        type: "REQUEST_CRYPTO_PRICE_SUCCESS",
        prices: res.data,
    }
};

export const requestCryptoPriceError = ( error ) => {
    return {
        type: 'REQUEST_CRYPTO_PRICE_ERROR',
        error
    };
};