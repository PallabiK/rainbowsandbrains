import React from 'react'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import "./pages.css"
import Helmet from 'react-helmet'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> R&amp;B - Blog </title>
                <meta name="Rainbows and Brains - Blog" content="Welcome to Rainbows and Brains!"/>
            </Helmet>
            <Layout>
                <h1 className="title">Recent Posts</h1>
                <br/>
                <PostList/>
            </Layout>
        </div>
    )
}

export default Home
