import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Toolbar/Toolbar';
import Footer from '../Footer/Footer';
import QuickLink from '../QuickLink/QuickLinks';
import Banner from '../../components/Banner/Banner';
//import Test from '../../containers/Test';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import ProductDetails from '../ProductDetails/ProductDetails';


const Layout = (props) => (

    <Aux>
        <Toolbar> Toolbar ,Sidebar</Toolbar>
        <Banner />
        <main className="Content">
            {props.children}
        </main>
      
        <QuickLink>Quick Link</QuickLink>
        <hr className="hr"></hr>
        <Footer> footer</Footer>
    </Aux>

);

export default Layout;