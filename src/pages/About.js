import React from 'react'
import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import aboutText from "../pages.json"
import Layout from "../components/Layout"
import Helmet from 'react-helmet'


const About = () => {
    return (
        <Layout>
            <Helmet>
                <title> R&amp;B - About </title>
                <meta name="Rainbows and Brains - Blog" content="All about Rainbows and Brains!"/>
            </Helmet>
            <div className = "page-content">
            <h1 className="title">About Rainbows and Brains</h1>
                <br/>
                <Markdown children={aboutText[0].content} rehypePlugins={[rehypeRaw]} />
            </div>
        </Layout>
    )
}

export default About
