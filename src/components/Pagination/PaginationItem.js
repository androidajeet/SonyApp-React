import React, { Component } from 'react';


class PaginationItem extends Component {


    render() {
        var styles = {
            color: "black"
        };
        return (
            <div>
                <li className="page-item"><a style={styles} className="page-link"  href="#id1" onClick={ this.props.onClickPage}>{this.props.children}</a></li>
            </div>
        );
    }
}








export default PaginationItem;