import {combineReducers} from 'redux';
import CryptoReducer from './containers/application/reducers/crypto';


const allReducers = combineReducers({
    crypto: CryptoReducer
});

export default allReducers;
