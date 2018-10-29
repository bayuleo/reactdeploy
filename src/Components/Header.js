import React from "react";
import "./Header.css";
import logo from './Assets/kumparan.svg';
import search from './Assets/search.svg';
import menu from './Assets/menu.svg';

const Header = () => {
    return(
        <div className="main-header">
            <div className="upper-header">
                <div className="logo">
                    <img src={logo}></img>
                    <input type="text"></input>
                    <a href="#" className="button-search"><img src={search}></img></a>
                    <a href="#" className="link-login">Log In</a>
                    <a href="#"> / </a>
                    <a href="#" className="link-signup">Sign Up</a>
                    <a href="#" className="button-menu"><img src={menu}></img></a>
                </div>
            </div>
            <div className="lower-header">
                <div className="menu">
                    <ul>
                        <li><a href="#">Lion Air Jatuh</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">Honor</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Sepak Bola</a></li>
                        <li><a href="#">Ekonomi</a></li>
                        <li><a href="#">Politik</a></li>
                        <li><a href="#">Hiburan</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;