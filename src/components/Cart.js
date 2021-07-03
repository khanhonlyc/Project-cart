import React, { Component } from 'react';

class Cart extends Component {
    render() {
        var children = this.props.children;
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>製品名</th>
                                <th>価格</th>
                                <th>数量</th>
                                <th>合計</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </div>
            </section>

        );
    }
}

export default Cart;
