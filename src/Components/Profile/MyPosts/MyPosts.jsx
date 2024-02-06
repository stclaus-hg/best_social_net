import React, { Component } from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

class MyPosts extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className={style.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    <Post message="Post 1" likes="10" />
                    <Post message="Post 2" likes="20" />
                    <Post message="Post 3" likes="5" />
                </div>
            </div>
        );
    }
}

export default MyPosts;