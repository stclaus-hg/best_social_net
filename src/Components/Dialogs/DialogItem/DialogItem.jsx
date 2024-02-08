import React, { Component } from 'react';
import style from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

class DialogItem extends Component {
    state = {}
    render() {
        const path = "/dialogs/" + this.props.id
        return (
            <div className={style.dialog}>
                <NavLink to={path}>{this.props.name}</NavLink>
            </div>
        );
    }
}

export default DialogItem;