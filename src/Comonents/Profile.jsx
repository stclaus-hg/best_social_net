import React, { Component } from "react";
import style from './Profile.module.css'

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className={style.content}>
                <div>
                    <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div className={style.item}>Post 1</div>
                        <div className={style.item}>Post 2</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;