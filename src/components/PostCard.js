import React from 'react'
import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import { Link } from "react-router-dom"
import "./components.css"

const PostCard = ({post}) => {

    function make_excerpt(content) {
        const words = post.content.split(" ")
        return words.length < 50 ? words.join(" ") : words.slice(0, 50).join(" ") + " [...]"
    }

    const excerpt = make_excerpt(post.content)

    return (
        <div className="post-card">
            <h2>{post.title}</h2>
                <small>Published on {post.date} by {post.author}</small>
            <hr/>
            <Markdown children={excerpt} rehypePlugins={[rehypeRaw]}/>
            <Link className="links" to={`/post/${post.slug}`}>Read more...</Link>            
        </div>
    )
}

export default PostCard
