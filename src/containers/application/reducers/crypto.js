
export default function (state = {
    data: {},
    prices: {},
    }, action) {
    switch (action.type){
        case "REQUEST_CRYPTO_LIST_SUCCESS":
            return {
                ...state,
                data: action.data
            };
        case "REQUEST_CRYPTO_PRICE_SUCCESS":

            return {
                ...state,
                prices: action.prices
            };
        default:
            return state;
    }
}