import React from 'react'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import "./pages.css"

const Home = () => {
    return (
        <div>
            <Layout>
                <h2 className="title">Recent Posts</h2>
                <br/>
                <PostList/>
            </Layout>
        </div>
    )
}

export default Home
