import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cart from '../reducers/cart';

class CartContainer extends Component {
    render() {
        //var cart = this.props.cart;
        var { cart } = this.props;
        console.log('cart value',cart);
        return (
            <div>

            </div>
        );
    }
}

// CartContainer.propTypes = {
//     cart: PropTypes.arrayOf(
//     ).isRequired
// }

const mapStateToProps = state =>{
    return{
        cart : state.cart
    }
}

export default connect(mapStateToProps)(CartContainer);
