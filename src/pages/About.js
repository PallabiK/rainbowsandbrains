import React from 'react'
import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import aboutText from "../pages.json"
import Layout from "../components/Layout"

const About = () => {
    return (
        <Layout>
            <div className = "page-content">
                <Markdown children={aboutText[0].content} rehypePlugins={[rehypeRaw]} />
            </div>
        </Layout>
    )
}

export default About
