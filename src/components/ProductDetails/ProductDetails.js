import React, { Component } from 'react';
import '../../common/css/Common.css';
import './ProductDetails.css';
import productImage from '../../assets/product.jpg';
import { connect } from "react-redux";
import { setName } from "../../actions/userActions";
import { addNumber } from "../../actions/cartActions";

class productDtails extends Component {


    render() {
        const listItems = this.props.location.productprops.features.map((elements) =>
            <li >{elements}</li>
        );

        var stylesButtonAddtocart = {
            marginTop: "10px",
            background: "black",
            border: "none",
            outline: "none",
            float: "right"


        };
        var styles = {
            width: "550px",
            height: "350px",
        };
        console.log(this.props.location.productprops)
        console.log(this.props.location.productprops.name)
        return (

            <div className="ProdectName">
                <div className="container">
                    <h1 className="my-4">{this.props.location.productprops.name} </h1>
                    <div className="row">
                        <div className="col-md-8">
                            <img className="img-fluid" style={styles} src="assets/product.jpg" alt=""></img></div>
                        <div className="col-md-4">
                            <h3 className="my-3">Product Features</h3>
                            <p>{JSON.stringify(this.props.location.productprops.specifications)}</p>
                            <h3 className="my-3">Product Details</h3>
                            <ul>
                                {listItems}
                            </ul>
                            <button style={stylesButtonAddtocart} className="btn btn-primary" onClick={() => this.props.setCart(1, this.props.location.productprops.name)} >Add To Cart</button>
                        </div>
                    </div>
                </div>

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
        setCart: (value, pName) => {
            dispatch(addNumber(value, pName));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(productDtails);

//<div className="NoItem"> <p>this is product details </p></div>