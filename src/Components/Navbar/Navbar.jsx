import React, { Component } from "react";
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? style.active : ''; 

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className={style.nav}>
                    <div className={style.item}>
                        <NavLink to="/profile" className={setActive}>Profile</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to="/news" className={setActive}>News</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to="/music" className={setActive}>Music</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to="/settings" className={setActive}>Settings</NavLink>
                    </div>
                </nav>
            </>
        )
    }
}