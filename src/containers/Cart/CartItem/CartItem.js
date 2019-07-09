import React, { Component } from 'react';
import { connect } from "react-redux";
import { setName } from "../../../actions/userActions";
import { addNumber, subtractNumber } from "../../../actions/cartActions";


class CartItem extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td><img src="https://dummyimage.com/50x50/55595c/fff" alt="product" /> </td>
                    <td>{this.props.productName}</td>
                    <td><input className="form-control" type="text" value={this.props.qty} /></td>
                    <td className="text-right">124,90 &#x20b9;</td>
                    <td className="text-right"><button className="btn btn-sm btn-danger" onClick={() => this.props.removeCart(1, this.props.productName)}><i className="fa fa-trash"></i> </button> </td>
                </tr>
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
        removeCart: (value, pName) => {
            dispatch(subtractNumber(value, pName));
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);