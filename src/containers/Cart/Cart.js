import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Cart.css';
import { connect } from "react-redux";
import { setName } from "../../actions/userActions";
import { addNumber, clearCart } from "../../actions/cartActions";
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
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"> </th>
                                            <th scope="col">Product</th>
                                            <th scope="col" className="text-center">Quantity</th>
                                            <th scope="col" className="text-right">Price</th>
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
                <div className="col mb-2">
                    <div className="row">
                        <div className="col-sm-12  col-md-6">
                            <Link to="/">  <button className="btn btn-block btn-light">Continue Shopping</button></Link>
                        </div>
                        <div className="col-sm-12 col-md-6 text-right">
                            <button className="btn btn-lg btn-block btn-dark text-uppercase" onClick={() => this.props.resetCart(0)} >Checkout</button>
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
        resetCart: (value) => {
            dispatch(clearCart(value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(cart);


//<p onClick={() => this.props.setCart(1)}>Hi, this is cart</p>