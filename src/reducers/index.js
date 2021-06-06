import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
//import me from './../constants/Message';

const appReducers = combineReducers({products, cart});

export default appReducers;
