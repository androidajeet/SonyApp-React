import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Cart.css';
import { connect } from "react-redux";
import { setName } from "../../actions/userActions";
import { addNumber, clearCart } from "../../actions/cartActions";
import CartItem from './CartItem/CartItem';

class cart extends Component {


    // componentDidMount() {

    //     localStorage.setItem("cartSize", 0);
    //     localStorage.setItem("carts", []);
    // }



    render() {
        console.log(this.props.cart.cartSize);

        const cartItems = [];

        if (this.props.cart.carts.length > 0) {

            for (var i = 0; i < this.props.cart.carts.length; i++) {
                cartItems.push(<CartItem key={i} productName={this.props.cart.carts[i].productName} qty={this.props.cart.carts[i].quantity}> </CartItem>);
            }
        } else {
            localStorage.setItem("cartSize", 0);
        }


        return (
            <div>
                {cartItems.length > 0 ?
                    <div>
                        <div id="cart" className="container mb-4">
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
                    :
                    <p className="NoItem"> Cart is empty :(  </p>

                }
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
        setCart: (value, pName) => {
            dispatch(addNumber(value, pName));
        },
        resetCart: (value) => {
            dispatch(clearCart(value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(cart);

