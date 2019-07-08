import React, { Component } from 'react';
import './Cart.css';
import { connect } from "react-redux";
import { setName } from "../../actions/userActions";
import { addNumber } from "../../actions/cartActions";
import CartItem from './CartItem/CartItem';

class cart extends Component {
    render() {
        console.log(this.props.cart.cartSize)
        const cartItems = [];
        for (var i = 0; i < this.props.cart.cartSize; i++) {
            cartItems.push(<CartItem key={i}> </CartItem>);
        }

        return (
            <div >
                <div class="container mb-4">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"> </th>
                                            <th scope="col">Product</th>
                                            <th scope="col" class="text-center">Quantity</th>
                                            <th scope="col" class="text-right">Price</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mb-2">
                    <div class="row">
                        <div class="col-sm-12  col-md-6">
                            <button class="btn btn-block btn-light">Continue Shopping</button>
                        </div>
                        <div class="col-sm-12 col-md-6 text-right">
                            <button class="btn btn-lg btn-block btn-dark text-uppercase">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math,
        cart: state.cart
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setCart: (value) => {
            dispatch(addNumber(value));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(cart);


//<p onClick={() => this.props.setCart(1)}>Hi, this is cart</p>