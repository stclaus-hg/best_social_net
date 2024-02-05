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
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        );
    }
}

export default MyPosts;