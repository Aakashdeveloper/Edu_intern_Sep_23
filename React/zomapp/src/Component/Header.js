import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header>
            <div id="brand">
                Developer Funnel
            </div>
            <a href="../Home/Home.html">Home</a>
            <div id="social">
                <a href="#">
                    <img src="https://i.ibb.co/bsXv4bf/facebook.png" alt="fb" className="socialLogo"/>
                </a>
                <a href="#">
                    <img src="https://i.ibb.co/8c9LJP1/insta.png" alt="insta" className="socialLogo"/>
                </a>
                <a href="#">
                    <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="yt" className="socialLogo"/>
                </a>
            </div>
        </header>
    )
}

export default Header;