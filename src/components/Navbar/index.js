import React from 'react';
import logo from '../../images/logo.svg';
import './styles.css';

function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="line"></div>
            <div className="btnContainer">
                <button className="btn">00 HOME</button>
                <button className="btn">01 DESTINATION</button>
                <button className="btn">02 CREW</button>
                <button className="btn">03 TECHNOLOGY</button>
            </div>
        </div>
    );
}

export default NavBar;
