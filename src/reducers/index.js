import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './message';
//import me from './../constants/Message';

const appReducers = combineReducers({
    products,
    cart,
    message
});

export default appReducers;
