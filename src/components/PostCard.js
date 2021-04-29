import React from 'react'
import { Link } from "react-router-dom"
import "./components.css"

const PostCard = ({post}) => {

    return (
        <div className="post-card">
            <h2>{post.title}</h2>
                <small>Published on {post.date} by {post.author}</small>
            <hr/>
            <figure className="image">
                <img src={post.title_img} alt={post.title} />
            </figure>
            
            <Link className="links" to={`/post/${post.slug}`}>Read more...</Link>            
        </div>
    )
}

export default PostCard
