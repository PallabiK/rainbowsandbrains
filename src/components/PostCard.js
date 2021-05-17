import React from 'react'
import { Link } from "react-router-dom"
import "./components.css"

const PostCard = ({post}) => {

    return (
        <div className="post-card">
            <figure className="image">
                <a href={`#/post/${post.slug}`}>
                    <img src={post.title_img} alt={post.title} />
                </a>
                <figcaption>
                <div className="post-info">{post.date} by {post.author}</div>
                <Link className="post-card-link" to={`/post/${post.slug}`}>Read more...</Link> 
                </figcaption>
            </figure>
                       
        </div>
    )
}

export default PostCard
