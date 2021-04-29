import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../components/Layout'
import postlist from "../posts.json"
import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import "./pages.css"

const Post = (props) => {

    const fetchedPost = postlist.find(el => el.slug === props.match.params.id)
        
    if(!fetchedPost){
        return <Redirect to="/404"/>
    }

    return (
                <Layout>
                    <div className="post">
                        <h2>{fetchedPost.title}</h2>
                        <small>By {fetchedPost.author} | {fetchedPost.date}</small>
                        <hr/>
                        <Markdown children={fetchedPost.content} rehypePlugins={[rehypeRaw]}/> 
                    </div>
                </Layout>
    )
}

export default Post
