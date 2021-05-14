import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../../components/Layout'
import NextPost from '../../components/NextPost/index.js'
import Social from '../../components/Social/index.js'
import postlist from '../../posts.json'
import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
//import "./pages.css"
import { PostContainer, PostHeader, PostBody, PostFooter } from './PostElements'
import Helmet from 'react-helmet'


const Post = (props) => {

    const fetchedPost = postlist.find(el => el.slug === props.match.params.id)

    const thisPage = window.location.href
        
    if(!fetchedPost){
        return <Redirect to="/404"/>
    }

    return (
                <Layout>
                    <Helmet>
                        <title> {`R&B - ${fetchedPost.title}`} </title>
                        <meta name={fetchedPost.title} content={fetchedPost.description} />
                        <meta property="og:url"          content={thisPage} />
                        <meta property="og:type"         content="article" />
                        <meta property="og:title"        content={fetchedPost.title} />
                        <meta property="og:description"  content={fetchedPost.description} />
                        <meta property="og:image"        content={fetchedPost.title_img} />
                    </Helmet>
                    <PostContainer>
                        <NextPost post={fetchedPost}/>
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
