import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Cart.css';
import { connect } from "react-redux";
import { setName } from "../../actions/userActions";
import { addNumber } from "../../actions/cartActions";

class Cart extends Component {
    render() {
        var stylesBadge = {
            background: "white",
            color:"black"
        };
        return (
            <div className="CartStyle" >
                <span  style={stylesBadge} class='badge badge-warning' id='lblCartCount'>{this.props.cart.cartSize}</span>
                <li ><Link to="/cart"><i className="fa fa-shopping-cart fa-lg"></i></Link></li>
            </div>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);