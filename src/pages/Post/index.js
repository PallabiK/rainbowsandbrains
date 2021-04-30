import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../../components/Layout'
import NextPost from '../../components/NextPost'
import Social from '../../components/Social'
import postlist from '../../posts.json'
import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
//import "./pages.css"
import { PostContainer, PostHeader, PostBody, PostFooter } from './PostElements'

const Post = (props) => {

    const fetchedPost = postlist.find(el => el.slug === props.match.params.id)

    const thisPage = window.location.href
        
    if(!fetchedPost){
        return <Redirect to="/404"/>
    }

    return (
                <Layout>
                    
                    <PostContainer>
                        <PostHeader>
                            <figure className="image">
                                <img src={fetchedPost.title_img} alt={fetchedPost.title} />
                            </figure>
                            <small>By {fetchedPost.author} | {fetchedPost.date}</small>
                            <br/>
                            <hr className="style-rainbow"/>
                            
                        </PostHeader>
                        <PostBody>
                            <Markdown children={fetchedPost.content} rehypePlugins={[rehypeRaw]}/> 
                        </PostBody>
                        <PostFooter>
                            <br/>
                            <hr className="style-rainbow"/>
                            <Social page={thisPage}/>
                            <hr className="style-rainbow"/>
                            <NextPost post={fetchedPost}/>
                        </PostFooter>
                    </PostContainer>
                </Layout>
    )
}

export default Post
