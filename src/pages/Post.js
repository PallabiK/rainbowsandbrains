import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../components/Layout'
import NextPost from '../components/NextPost'
import Social from '../components/Social'
import postlist from "../posts.json"
import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import "./pages.css"

const Post = (props) => {

    const fetchedPost = postlist.find(el => el.slug === props.match.params.id)

    const thisPage = window.location.href
        
    if(!fetchedPost){
        return <Redirect to="/404"/>
    }

    return (
                <Layout>
                    <div className="post">
                        <NextPost post={fetchedPost}/>
                        <Social page={thisPage}/>
                        <h2>{fetchedPost.title}</h2>
                        <figure className="image">
                            <img src={fetchedPost.title_img} alt={fetchedPost.title} />
                        </figure>
                        <small>By {fetchedPost.author} | {fetchedPost.date}</small>
                        <hr/>
                        <Markdown children={fetchedPost.content} rehypePlugins={[rehypeRaw]}/> 
                    </div>
                </Layout>
    )
}

export default Post
