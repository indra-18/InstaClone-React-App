import React from "react";
import { Link } from "react-router-dom";
import camera from '../images/camera.png';
import icon from '../images/icon.png'
import '../App.css'


function Header() {
    return <div id='header'>
        <div id='header-left'>
            <div>
                <img src={icon} alt={'Insta icon'} />
            </div>
            <h1 id='insta-header'>Instaclone</h1>
        </div>
        <div id='camera'>
            <Link to='/post'>
            <img src={camera} alt={'camera button'} />
            </Link>
            
        </div>
    </div>
}

export default Header;