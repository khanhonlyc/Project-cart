import React, { Component } from 'react'
import { DELETE_PRODUCT_IN_CART } from '../constants/ActionType';
import * as MessageDetete from './../constants/Message'

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity : 1
        }
    }

    render() {
        var { item } = this.props;
        var { quantity} = item.quantity> 0 ?  item : this.state;

        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price} ¥</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdeteQuantity(item.product, quantity - 1)}
                        >
                            <a>—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdeteQuantity(item.product, quantity + 1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td> {item.product.price * item.quantity} ¥</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.DeleteProduct(item.product)}
                    > X </button>
                </td>
            </tr>
        );
    }

    onUpdeteQuantity = (product, quantity) =>{
        if(quantity > 0){
            this.setState({
                quantity : quantity
            })
        this.props.OnUpdateProductInCart(product, quantity);
        }
    }

    DeleteProduct = (product) => {
        this.props.OnDeleteInCart(product);
        this.props.OnChangeMessage(MessageDetete.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
}

export default CartItem;
