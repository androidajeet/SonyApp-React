import React, { Component } from 'react';
import Product from '../../components/Product/Product';
import { getExpiredProducts, getExpiringSoonProducts } from '../../helper/productHelper';
import './ProductList.css';


class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPageNumber: props.currentPageNumber,
            itemsPerPage: props.itemsPerPage
        }
    }


    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {

        // console.log(this.props.productFilter);
        var styles = {
            marginBottom: "10px",
        };

        if (this.props.productFilter === "all") {
            return (
                <div style={styles} className="container-fluid">
                    <div className="row">
                        {

                            ((this.props.allProductList).slice(((this.props.currentPageNumber - 1) * this.props.itemsPerPage), ((this.props.itemsPerPage) * this.props.currentPageNumber))).map((product, index) => {
                                return (
                                    <Product key={product.name} productName={product.name} product={product} changeUsername={() => this.props.setName("Anna")} changeCart={() => this.props.addNumber(1)} />
                                );
                            })

                        }
                    </div>
                </div>
            );
        } else if (this.props.productFilter === "expired") {
            let arrayExpired = getExpiredProducts(this.props.allProductList);
            return (
                <div style={styles} className="container-fluid">
                    <div className="row">
                        {
                            arrayExpired.length > 0 ?
                                arrayExpired.map((product, index) => {
                                    return (<Product key={product.name} productName={product.name} product={product} changeCart={() => this.props.addNumber(1)} />);
                                })
                                :
                                <div className="NoItem"><p>There is no such item</p></div>
                        }
                    </div>
                </div>
            );

        }

        // else if (this.props.productFilter === "expiring_soon") {
        //     var arrayExpiringSoon = getExpiringSoonProducts(this.props.allProductList);
        //     if (arrayExpiringSoon.length > 0) {
        //         return arrayExpiringSoon.map((product, index) => {
        //             return (
        //                 <Product key={product.name} productName={product.name} product={product} changeCart={() => this.props.addNumber(1)} />
        //             );
        //         });
        //     } else {
        //         return (
        //             <div className="NoItem"><p>There is no such item</p></div>
        //         );
        //     }
        // } 

        else if (this.props.productFilter === "expiring_soon") {

            var arrayExpiringSoon = getExpiringSoonProducts(this.props.allProductList);
            console.log(arrayExpiringSoon);
            return (

                <div style={styles} className="container-fluid">
                    <div className="row">
                        {
                            arrayExpiringSoon.length > 0 ? arrayExpiringSoon.map((product, index) => {
                                return (<Product key={product.name} productName={product.name} product={product} changeCart={() => this.props.addNumber(1)} />);
                            })
                                :
                                <div className="NoItem"><p>There is no such item</p></div>
                        }
                    </div>
                </div>

            );
        }
        else {
            return (
                <div className="NoItem"><p>Something went wrong...</p></div>
            );
        }
    }
}








export default ProductList;