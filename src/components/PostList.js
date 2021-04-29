import React from 'react'
import PostCard from "./PostCard"
import "./components.css"
import postlist from "../posts.json"

const PostList = () => {
    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    return <PostCard post={post} key={i}/>
                })
            }
        </div>
    )
}

export default PostList
