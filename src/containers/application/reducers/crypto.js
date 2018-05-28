
export default function (state = null, action) {

    switch (action.type){
        case "REQUEST_CRYPTO_LIST_SUCCESS":
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}