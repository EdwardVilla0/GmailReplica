import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
                    alt="" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right"></div>
        </div>
    )
}

export default Header
