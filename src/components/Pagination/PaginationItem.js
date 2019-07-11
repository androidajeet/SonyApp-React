import React, { Component } from 'react';
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions/paginationActions";

class PaginationItem extends Component {
    render() {
        var styles = {
            color: "black"
        };
        return (
            <div>
                <li className="page-item"><a style={styles} className="page-link" href="#id1" onClick={() => this.props.onClickPage(this.props.pageNo)} >{this.props.children}</a></li>
            </div>
        );
    }
}





const mapDispatchToProps = (dispatch) => {
    return {
        onClickPage: (pageNo) => {
            dispatch(setCurrentPage(pageNo));
        }
    };

};


export default connect(null, mapDispatchToProps)(PaginationItem);