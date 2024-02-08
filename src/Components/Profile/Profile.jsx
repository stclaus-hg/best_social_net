import React, { Component } from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {
    render() {
        return (
            <div className={style.content}>
                <ProfileInfo />
                <MyPosts postsData={this.props.postsData}/>
            </div>
        );
    }
}

export default Profile;