import React from 'react';
import './Toolbar.css';
//import logo from '../../assets/logo.png';
import Aux from '../../hoc/Auxiliary';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";

const toolbar = () => {
    return (
        <Aux>
            < div className="Toolbar" >
                <Link to="/">
                    <img className="Logo" src="assets/logo.png" alt="sony logo"></img>
                </Link>
                <NavBar />
            </div>

        </Aux>
    );

};

export default toolbar;

