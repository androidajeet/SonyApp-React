import React, { Component } from 'react'
import './NavBar.css';
import CartIcon from '../../containers/Cart/CartIcon';

class NavBar extends Component {

    filterHandler() {
        console.log("click on filter")
    }

    render() {
        var styles = {
            color: 'white',
            textDecoration: 'none'
        };

        return (
            <div className="Menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li id = "id3" className="nav-item">
                                <a style={styles} className="nav-link" href="#id3" onClick={this.filterHandler}>Careers</a></li>
                            <li className="nav-item">
                                <a style={styles} className="nav-link" href="#id3">Contact Us</a></li>
                            <li className="nav-item">
                                <a style={styles} className="nav-link" href="#id3">Company Info</a></li>
                            <li className="nav-item">
                                <a style={styles} className="nav-link" href="#id3">Voluntary Recall</a></li>
                            <CartIcon></CartIcon>
                        </ul>


                    </div>



                </nav>


            </div>
        );
    }
}

export default NavBar;