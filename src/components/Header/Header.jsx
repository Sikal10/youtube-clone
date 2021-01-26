import React from 'react';
import "./Header.css"
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";

// const link = "https://tdescargas.org/wp-content/uploads/2017/04/Activar-fondo-negro-en-app-de-YouTube.jpg"
const link = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
// const link = "https://cdn2.expertreviews.co.uk/sites/expertreviews/files/5/11/youtube_logo_0.jpg"
const Header = () => {
    return (
        <div className={"header"}>
            <div className="header__left">
                <MenuSharpIcon />
                <img className={"header__logo"} src={link} alt=""/>
            </div>

            <div className="header__center">
                <input placeholder={"Search"} type={"text"}/>
                <SearchSharpIcon className={"header__centerButton"} />
            </div>

            <div className="header__right">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar />
            </div>
        </div>
    );
};

export default Header;