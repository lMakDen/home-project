import axios from 'axios';

export const requestCryptoList = () => {
    return function action(dispatch) {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.cryptocompare.com/api/data/coinlist";
        axios.get(proxyurl + url)
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
        data: res.data.Data,
    }
};

function requestCryptoListError( error ) {
    return {
        type: 'REQUEST_CRYPTO_LIST_ERROR',
        error
    };
}