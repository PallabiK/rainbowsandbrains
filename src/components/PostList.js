import React from 'react'
import PostCard from "./PostCard"
import "./components.css"
import postlist from "../posts.json"

const PostList = () => {
    return (
        <div className="postlist">
            {postlist.length && 
                postlist.map((post, i) => {
                    return <PostCard post={post} key={i}/>
                })
            }
        </div>
    )
}

export default PostList
