import React from 'react'
import { Link } from "react-router-dom"
import postlist from "../posts.json"
import "./components.css"

const NextPost = ({post}) => {

    // get previous and next post
    const i = postlist.findIndex(el => el.id === post.id)
    const next = postlist[i===0?postlist.length-1:i-1]
    const previous = postlist[i===postlist.length-1?0:i+1]

    return (
        <div className="nextpost">
            <Link className="links" to={`/post/${previous.slug}`}>Prev Post</Link>
            <Link className="links" to={`/post/${next.slug}`}>Next Post</Link>
        </div>
    )
}

export default NextPost
