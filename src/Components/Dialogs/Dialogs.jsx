import React, { Component } from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

class Dialogs extends Component {
    render() {
        return (
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    { this.props.dialogsData.map( dialog => <DialogItem id={dialog.id} name={dialog.name} />)}
                </div>
                <div className={style.messages}>
                    { this.props.messagesData.map( message => <Message id={message.id} message={message.message} />)}
                </div>
            </div>
        );
    }
}

export default Dialogs;