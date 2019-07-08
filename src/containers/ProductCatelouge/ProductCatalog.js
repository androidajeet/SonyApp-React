import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList';
import Paginator from '../../components/Pagination/Pagination';
import axios from '../../axios';

class ProductCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: "all",
            currentPageNumber: 1,
            itemsPerPage: 6,
            allProductList: []
        };
        //bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
    componentWillMount() {
        this.readData();
        console.log(" in side componentWillMount");
    }
    readData() {
        axios
            .then(response => {
                let products = this.getAllProduct(response.data);
                this.setState(
                    {
                        allProductList: products
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }
    getAllProduct(json, products = []) {
        if (json.hasOwnProperty("children")) {
            json.children.forEach(element => {
                this.getAllProduct(element, products);
            });
        } else {
            products.push(json);
        }

        return products;
    }


    onChangePage(event) {
        //update state with new page of items
        console.log(this);
        console.log(event.target.innerHTML);
        this.setState(
            { currentPageNumber: parseInt(event.target.innerHTML) }
        );
    }


    filterHandler = (event) => {
        let updatedFilter = event.target.value;
        this.setState(
            { filter: updatedFilter }
        );
    }


    render() {
        var styles = {
            float: 'right',
            marginRight: "10px",
        };

        return (
            <div>
                <Paginator
                    allProductList={this.state.allProductList}
                    onClickPage={this.onChangePage}
                    currentPageNumber={this.state.currentPageNumber}
                    itemsPerPage={this.state.itemsPerPage} />

                <select style={styles} value={this.state.filter} onChange={this.filterHandler} >
                    <option value="all">All</option>
                    <option value="expiring_soon">Expiring Soon</option>
                    <option value="expired">Expired</option>
                </select>
                <ProductList
                    itemsPerPage={this.state.itemsPerPage}
                    currentPageNumber={this.state.currentPageNumber}
                    allProductList={this.state.allProductList}
                    productFilter={this.state.filter} />
            </div>
        );

    }
}
export default ProductCatalog;