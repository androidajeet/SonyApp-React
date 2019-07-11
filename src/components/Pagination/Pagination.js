import React, { Component } from 'react';
import './Pagination.css';
import PaginationItem from './PaginationItem';

class Paginator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageNumber: props.currentPageNumber,
            totalItems: props.totalItems,
            itemsPerPage: props.itemsPerPage,
            totalPages: props.totalPages
        };
    }

    render() {

        var styles = {
            color: "black"
        };

        let totalPages = Math.ceil(this.props.allProductList.length / this.props.itemsPerPage);
        const pageItems = [];
        for (var i = 0; i < totalPages; i++) {
            pageItems.push(<PaginationItem key={i} pageNo={i + 1}> {i + 1} </PaginationItem>);
        }

        return (
            <nav style={styles} className="PaginationContainer" >
                <ul id="id1" className="pagination justify-content-center">
                    {pageItems}
                </ul>
            </nav>

        );
    }
}



export default Paginator;

/*
{pageItems}
<li className="page-item"><a style={styles} className="page-link" href="#id1" onClick={(event) => this.props.onClickPage(event)}>1</a></li>
                    <li className="page-item"><a style={styles} className="page-link" href="#id1" onClick={(event) => this.props.onClickPage(event)} >2</a></li>
                    <li className="page-item"><a style={styles} className="page-link" href="#id1" onClick={(event) => this.props.onClickPage(event)} >3</a></li>

                    <li className="page-item"><a style={styles} className="page-link" href="#id1" onClick={(event) => this.props.onClickPage(event)}>1</a></li>
                    <li className="page-item"><a style={styles} className="page-link" href="#id1" onClick={(event) => this.props.onClickPage(event)} >2</a></li>
                    <li className="page-item"><a style={styles} className="page-link" href="#id1" onClick={(event) => this.props.onClickPage(event)} >3</a></li>
                    */