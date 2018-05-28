import axios from 'axios';

export const requestCryptoList = () => {
    return function action(dispatch) {
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
            .then(function (response) {
                dispatch(requestCryptoListSuccess(response))
            })
            .catch(function (error) {
                requestCryptoListError(error)
            });
    }
};

export const requestCryptoListSuccess = ( res ) => {
    return {
        type: "REQUEST_CRYPTO_LIST_SUCCESS",
        data: res.data,
    }
};

function requestCryptoListError( error ) {
    return {
        type: 'REQUEST_CRYPTO_LIST_ERROR',
        error
    };
}