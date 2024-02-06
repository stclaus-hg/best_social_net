import React, { Component } from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className={style.content}>
                <ProfileInfo />
                <MyPosts />
            </div>
        );
    }
}

export default Profile;