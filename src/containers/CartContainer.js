import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CardResult from '../components/CardResult';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} from './../actions/index'

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmout(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) =>{
        var result = Message.MSG_CART_EMPTY;
        var {ondeleteInCart, onChangeMessage, onUpdateProductInCart} = this.props;
        
        if(cart.length>0){
            result = cart.map((item,index) =>{
                return(
                    <CartItem
                        key = {index}
                        item = {item}
                        OnDeleteInCart = {ondeleteInCart}
                        OnChangeMessage = {onChangeMessage}
                        OnUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }

    showTotalAmout= (cart) =>{
        var result = null;
        if(cart.length>0){
            result = <CardResult cart={cart}/>
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })
    ).isRequired
}

const mapStateToProps = state =>{
    return{
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        ondeleteInCart : (product) => {
            dispatch(actDeleteProductInCart(product));
        },

        onChangeMessage : (ms) =>{
                dispatch(actChangeMessage(ms));
        },

        onUpdateProductInCart : (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
