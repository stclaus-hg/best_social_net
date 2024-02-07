import React, { Component } from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

class MyPosts extends Component {
    postsData = [
        {id: 1, message: 'Post 1', likes: 10},
        {id: 2, message: 'Post 2', likes: 20}, 
        {id: 3, message: 'Post 3', likes: 5}
    ]
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
                    { this.postsData.map( post => <Post id={post.id} message={post.message} likes={post.likes} />)}
                </div>
            </div>
        );
    }
}

export default MyPosts;