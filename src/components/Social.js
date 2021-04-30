import React from 'react'
import "./components.css"

import {FacebookShareButton, TwitterShareButton, WhatsappShareButton, RedditShareButton, EmailShareButton,} from "react-share"
import {FacebookIcon, TwitterIcon, WhatsappIcon, RedditIcon, EmailIcon} from "react-share"


const Social = ({page}) => {

    console.log(page)


    return (
        <div className="social">
            <small>Like this article? Feel free to share!</small>
            <div className="social-buttons">
            <FacebookShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
            </TwitterShareButton>
            <WhatsappShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
            </WhatsappShareButton>
            <RedditShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                <RedditIcon logoFillColor="white" round={true}></RedditIcon>
            </RedditShareButton>
            <EmailShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                <EmailIcon logoFillColor="white" round={true}></EmailIcon>
            </EmailShareButton>
            </div>
        </div>
    )
}

export default Social
