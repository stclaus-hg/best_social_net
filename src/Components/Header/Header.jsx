import React, { Component } from "react";
import style from './Header.module.css'

export default class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg" />
            </header>
        )
    }
}