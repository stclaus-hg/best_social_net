import React, { Component } from 'react';
import style from './ProfileInfo.module.css';

class ProfileInfo extends Component {
    state = {}
    render() {
        return (
            <>
                <div>
                    <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
                </div>
                <div className={style.descriptionBlock}>
                    ava + description
                </div>
            </>
        );
    }
}

export default ProfileInfo
    ;