import React, { Component } from 'react';
import './Location.css';
import locationImage from '../../assets/lo.png';
class Location extends Component {
    render() {
        return (


            <div id="wrapper">
                <div id="div1"><a href="www.sony.co.in"><p >sony.co.in </p></a></div>
                <div id="div2"> <img className="LocationImage" alt="location" src="assets/lo.png"></img></div>
            </div>


        );
    }
}


export default Location;