import React from 'react';
import './Footer.css';

import Location from '../../containers/Location/Location';
const footer = () => {

    return (
        <div className="Footer">
            <div >
                <p className="CopyRight">© 2019 SONY CORPORATION OF AMERICA <br /> Terms and ConditionsPrivacy Policy/Your California Privacy Rights</p>
            </div>
            <Location ></Location>
        </div>
    );
}

export default footer;