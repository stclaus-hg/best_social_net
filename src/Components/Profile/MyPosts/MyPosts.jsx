import React, { Component } from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

class MyPosts extends Component {
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
                    { this.props.postsData.map( post => <Post id={post.id} message={post.message} likes={post.likes} />)}
                </div>
            </div>
        );
    }
}

export default MyPosts;