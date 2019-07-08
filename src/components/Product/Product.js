import React, { Component } from 'react';
import productImage from '../../assets/product.jpg';
import './Product.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setName } from "../../actions/userActions";
import { addNumber } from "../../actions/cartActions";


class product extends Component {
    render() {
        var styles = {
            width: "17rem",
            marginTop: "20px",
        };
        var stylescard = {
            marginTop: "20px"

        };
        var stylesButton = {
            background: "black",
            borderColor: "black",


        };

        var stylesButtonAddtocart = {
            marginTop: "10px",
            background: "black",
            border: "none",
            outline: "none"


        };
        return (
            <div style={stylescard} className="col">
                <div style={styles} className="card">
                    <img src={productImage} alt="ProductImage"></img>
                    <div className="card-body"></div>
                    <h5 className="card-title">{this.props.productName.substring(0, 25) + "..."}</h5>
                    <Link to="/details" style={stylesButton} className="btn btn-primary">View details</Link>
                    <button style={stylesButtonAddtocart} className="btn btn-primary" onClick={() => this.props.setCart(1)}>Add To Cart</button>
                </div>
            </div>
        );
    };

}
// const product = (props) => {
//     var styles = {
//         width: "17rem",
//         marginTop: "20px",
//     };
//     var stylescard = {
//         marginTop: "20px"

//     };
//     var stylesButton = {
//         background: "black",
//         borderColor: "black",


//     };

//     var stylesButtonAddtocart = {
//         marginTop:"10px",
//         background: "black",
//         border: "none",



//     };
//     return (
//             <div style={stylescard} className="col">
//                 <div style={styles} className="card">
//                     <img src={productImage} alt="ProductImage"></img>
//                     <div className="card-body"></div>
//                     <h5 className="card-title">{props.productName.substring(0, 25) + "..."}</h5>
//                     <Link to="/details" style={stylesButton}  className="btn btn-primary">View details</Link>
//                     <button style={stylesButtonAddtocart} className="btn btn-primary" onClick={() => this.props.setCart(1)}>Add To Cart</button>
//                 </div>
//             </div>

//     );



// }


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
export default connect(mapStateToProps, mapDispatchToProps)(product);