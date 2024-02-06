import React, { Component } from 'react';
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

class DialogItem extends Component {
    state = {}
    render() {
        const path = "/dialogs/" + this.props.id
        return (
            <div className={style.dialog + ' ' + style.active}>
                <NavLink to={path}>{this.props.name}</NavLink>
            </div>
        );
    }
}

class Message extends Component {
    state = {  } 
    render() { 
        return (
            <div className={style.message}>{this.props.message}</div>
        );
    }
}
 
class Dialogs extends Component {
    state = {}
    render() {
        return (
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <DialogItem id="1" name="Wayne" />
                    <DialogItem id="2" name="Priscilla" />
                    <DialogItem id="3" name="Cade" />
                    <DialogItem id="4" name="Franklin" />
                    <DialogItem id="5" name="Fred" />
                </div>
                <div className={style.messages}>
                    <Message message="Hi" />
                    <Message message="How are you?" />
                    <Message message="I am fine, and you?" />
                </div>
            </div>
        );
    }
}

export default Dialogs;