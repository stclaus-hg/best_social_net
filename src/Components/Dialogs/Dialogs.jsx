import React, { Component } from 'react';
import style from './Dialogs.module.css'
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

class Message extends Component {
    state = {  } 
    render() { 
        return (
            <div className={style.message}>{this.props.message}</div>
        );
    }
}
 
class Dialogs extends Component {
    dialogsData = [
        {id: 1, name: 'Wayne'},
        {id: 2, name: 'Priscilla'},
        {id: 3, name: 'Cade'},
        {id: 4, name: 'Franklin'},
        {id: 5, name: 'Fred'},
    ]
    messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine, and you?'},
    ]
    render() {
        return (
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    { this.dialogsData.map( dialog => <DialogItem id={dialog.id} name={dialog.name} />)}
                </div>
                <div className={style.messages}>
                    { this.messagesData.map( message => <Message id={message.id} message={message.message} />)}
                </div>
            </div>
        );
    }
}

export default Dialogs;